import { FC, useEffect } from "react";

//style
import {
  LabelInputContentHolder,
  RegisterParagraph,
} from "./style/Register.style";
import { Button, Input, StyledForm } from "App/style/App.style";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
// import {
//   updateFirstName,
//   updateLastName,
//   updateusername,
//   updateRole,
//   updateEmail,
// } from "redux/Auth/Register/RegisterSlice";
// import { fetchUserData } from "redux/Auth/Register/RegisterSlice";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  signupUser,
  signupSelector,
  clearState,
} from "../../redux/Auth/Register/RegisterSlice";
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    signupSelector
  );

  const onSubmit = (data: SignUpData) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate("/auth/login");
    }
  }, [isError, isSuccess, dispatch, navigate]);
  return (
    <>
      <StyledForm height="fit-content"  onSubmit={handleSubmit(onSubmit)}>
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
            // onChange={(e: any) => handleChange(e, "firstName")}
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
          // onChange={(e: any) => handleChange(e, "lastName")}
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
          // onChange={(e: any) => handleChange(e, "email")}
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
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   const username = e.target.value;
          //   console.log(`Username input value: ${username}`);
          // }}
        />
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderRadius="5px"
          fontFamily="Poppins"
          fontSize="17px"
          // onClick={handleFetchUserData}
        >
          Submit
        </Button>
      </StyledForm>
    </>
  );
};
export default Register;
