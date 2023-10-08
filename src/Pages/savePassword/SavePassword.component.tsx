import { FC, useState } from "react";

// style
import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";
import { AppDispatch } from "redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetPassword } from "redux/Auth/SavePassword/SavePasswordSlice";

import {
  SavePassButtonHolder,
  Warning,
  SavePassparagraph,
  Label,
} from "./style/SavePassword.component";
const ResetPassword: FC<{}> = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();
  console.log(newPassword);
  const handleResetPassClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    const password = {
      password: newPassword || "",
    };
    try {
      await dispatch(resetPassword(password));
      console.log("sukses");
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(resetPassword);
  return (
    <>
      <StyledForm height="fit-content">
        <SavePassparagraph>ADD NEW PASSWORD</SavePassparagraph>
        <Label>NEW PASSWORD</Label>
        <Input
          placeholder="*******"
          type="password"
          fontSize="12px"
          fontWeight="700"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="40px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
        ></Input>
        <Label>CONFIRM PASSWORD</Label>
        <Input
          placeholder="*******"
          type="password"
          fontSize="12px"
          fontWeight="700"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="none"
          width="100%"
          height="40px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          margin=" 5px 0 15px 0px"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        ></Input>

        {!passwordsMatch && (
          <Warning>Passwords do not match. Please try again!</Warning>
        )}
        <SavePassButtonHolder>
          <Button
            h="40px"
            w="100%"
            variant="primary"
            borderradius="20px"
            fontFamily="Poppins"
            fontSize="15px"
            onClick={handleResetPassClick}
          >
            SUBMIT
          </Button>
        </SavePassButtonHolder>
      </StyledForm>
    </>
  );
};

export default ResetPassword;
