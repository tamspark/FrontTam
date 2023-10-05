import { FC, useEffect, useState } from "react";

//style
import {
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
      console.log("Sukses");
    } catch (error) {
      console.log("Not succese");
      console.error("Register failed:", error);
    }
  };

  return (
    <>
      <StyledForm height="fit-content">
        <RegisterParagraph>Register</RegisterParagraph>
        <LabelInputContentHolder>
          <Input
            placeholder="FirstName"
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
            margin=" 25px auto"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
        </LabelInputContentHolder>

        <Input
          placeholder="LastName"
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
          margin=" 25px auto"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />

        <Input
          placeholder="Email"
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
          margin=" 25px auto"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

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
          margin=" 25px auto"
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

        <Input
          placeholder="Username"
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
          margin=" 25px auto"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
            console.log(`Username input value: ${username}`);
          }}
        />
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderRadius="5px"
          fontFamily="Poppins"
          fontSize="17px"
          onClick={handleRegisterClick}
        >
          Submit
        </Button>
      </StyledForm>
    </>
  );
};
export default Register;
