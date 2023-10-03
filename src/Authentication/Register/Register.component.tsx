import { FC } from "react";
//style
import {
  LabelInputContentHolder,
  RegisterParagraph,
} from "./style/Register.style";
import { Button, Input, StyledForm } from "App/style/App.style";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { updateFirstName } from "redux/RegisterSlice";
const Register: FC<{}> = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, email,role, username } = useSelector(
      (state: RootState) => state.auth
    );
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        field: string
      ) => {
        dispatch(updateFirstName({ field, value: event.target.value }));
      };
  return (
    <>
      <StyledForm width="300px" height="fit-content">
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
            onChange={(e:any)=> handleChange(e,'firstName')}
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
        />
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderRadius="5px"
          fontFamily="Poppins"
          fontSize="17px"
        >
          Submit
        </Button>
      </StyledForm>
    </>
  );
};
export default Register;
