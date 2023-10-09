import { FC, useEffect, useState } from "react";

//style
import {
  ButtonContainer,
  Label,
  LabelInputContentHolder,
  RegisterParagraph,
} from "./style/Register.style";
import { Button, Input, StyledForm, StyledSelect } from "App/style/App.style";

//axios
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { registerUser } from "redux/Auth/Register/RegisterSlice";

interface DropdownItem {
  id: string;
  name?: string;
}

const Register: FC<{}> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<number | null>(null); // Store the selected role's id
  const [roles, setRoles] = useState<DropdownItem[]>([]);
  console.log("role", roles);
  console.log(email);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    axios
      .get<DropdownItem[]>("http://192.168.10.213:8080/TAM/role")
      .then((res) => {
        setRoles(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error is", err));
  }, []);

  const handleRegisterClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (selectedRole === null) {
      console.log("Please select a role");
      return;
    }

    const userCredentials = {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      email: email || "",
      role: {
        id: selectedRole || 0,
      },
    };

    try {
      await dispatch(registerUser(userCredentials));
      // window.location.href = "login";
      console.log("Sukses");
    } catch (error) {
      console.log("Not succese");
      console.error("Register failed:", error);
    }
  };

  return (
    <>
      <StyledForm height="fit-content">
        <RegisterParagraph>REGISTER</RegisterParagraph>
        <LabelInputContentHolder>
          <Label>FIRSTNAME</Label>
          <Input
            placeholder="Firstname..."
            type="text"
            fontFamily="Poppins"
            fontSize="12px"
            borderbottomrightradius="20px"
            bordertoprightradius="20px"
            border="none"
            width="100%"
            height="45px"
            backgroundcolor="#FFFFFF"
            borderradius="10px"
            paddingleft="5px"
            padding="0 10px"
            margin=" 5px 0 15px 0px"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
        </LabelInputContentHolder>
        <Label>LASTNAME</Label>
        <Input
          placeholder="Lastname..."
          type="text"
          fontFamily="Poppins"
          fontSize="12px"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="45px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
        <Label>EMAIL</Label>
        <Input
          placeholder="Email..."
          type="text"
          fontFamily="Poppins"
          fontSize="12px"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="45px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Label>ROLE</Label>
        <StyledSelect
          fontFamily="Poppins"
          fontSize="12px"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="45px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={selectedRole !== null ? selectedRole.toString() : ""}
          onChange={(e: any) => setSelectedRole(Number(e.target.value))}
          required={true}
        >
          <option defaultValue="none">Select an Option</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </StyledSelect>
        <Label>USERNAME</Label>
        <Input
          placeholder="Username..."
          type="text"
          fontFamily="Poppins"
          fontSize="12px"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="45px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
            console.log(`Username input value: ${username}`);
          }}
        />
        <ButtonContainer>
          <Button
            h="40px"
            w="100%"
            variant="primary"
            borderradius="20px"
            fontFamily="Poppins"
            fontSize="15px"
            margin="36px 0 20px 0"
            onClick={handleRegisterClick}
          >
            SUBMIT
          </Button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
};
export default Register;
