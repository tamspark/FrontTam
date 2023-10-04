import { FC, useEffect, useState } from "react";

//style
import {
  LabelInputContentHolder,
  RegisterParagraph,
} from "./style/Register.style";
import { Button, Input, StyledForm } from "App/style/App.style";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { registerUser } from "redux/Auth/Register/RegisterSlice";
// import { RootState } from "redux/store";
// import {
//   updateFirstName,
//   updateLastName,
//   updateusername,
//   updateRole,
//   updateEmail,
// } from "redux/Auth/Register/RegisterSlice";
// import { fetchUserData } from "redux/Auth/Register/RegisterSlice";

// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import {
//   signupUser,
//   signupSelector,
//   clearState,
// } from "../../redux/Auth/Register/RegisterSlice";
interface SignUpData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Register: FC<{}> = () => {
  // const { firstName, lastName, roleId, roleName, username } = useSelector(
  //   (state: RootState) => state.register // Use 'register' here to match the slice name
  // );

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   field: string
  // ) => {
  //   dispatch(updateFirstName(event.target.value));
  //   dispatch(updateLastName(event.target.value));
  //   dispatch(updateusername(event.target.value));

  //   dispatch(updateEmail(event.target.value));

  // };

  // const handleRoleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const selectedRoleId = event.target.value; // Assuming your input field provides the role ID
  //   const selectedRoleName = event.target.options[
  //     event.target.selectedIndex
  //   ].text; // Assuming you have a dropdown/select for role names

  //   dispatch(updateRole({ roleId: selectedRoleId, roleName: selectedRoleName }));
  // };

  // const handleFetchUserData = () => {
  //   dispatch(fetchUserData(userId));
  // };

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<SignUpData>();
  // const { isFetching, isSuccess, isError, errorMessage } = useSelector(
  //   signupSelector
  // );

  // const onSubmit = (data: SignUpData) => {
  //   dispatch(signupUser(data));
  // };

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearState());
  //   };
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     console.log(errorMessage);
  //     dispatch(clearState());
  //   }

  //   if (isSuccess) {
  //     dispatch(clearState());
  //     navigate("/auth/login");
  //   }
  // }, [isError, isSuccess, dispatch, navigate]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleRegisterClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const userCredentials = {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      email: email || "",
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

        <Input
          placeholder="Role"
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
          // onChange={handleRoleChange}
        />

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
            // console.log(`Username input value: ${username}`);
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
