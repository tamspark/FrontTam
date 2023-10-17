import { FC, useState } from "react";
import { useNavigate } from "react-router";
// style
import {
  ToggleButton,
  InputGroup,
  Input,
  Button,
  StyledForm,
} from "App/style/App.style";

//redux
import { AppDispatch } from "redux/store";
import { useDispatch } from "react-redux";

import { resetPassword } from "redux/Auth/SavePassword/SavePasswordSlice";

//fortawesome-icons
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styled-component
import {
  SavePassButtonHolder,
  Warning,
  SavePassparagraph,
  Label,
} from "./style/SavePassword.style";


const ResetPassword: FC<{}> = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

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
      password: newPassword,
    };
    try {
      await dispatch(resetPassword(password));
      navigate("/auth/login");
      console.log("sukses");
    } catch (error) {
      console.log("error", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <StyledForm height="fit-content">
        <SavePassparagraph>ADD NEW PASSWORD</SavePassparagraph>
        <Label>NEW PASSWORD</Label>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            fontSize="12px"
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
          />
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </ToggleButton>
        </InputGroup>
        <Label>CONFIRM PASSWORD</Label>

        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="*******"
            fontSize="12px"
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
          />
          <ToggleButton type="button" onClick={toggleConfirmPasswordVisibility}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
          </ToggleButton>
        </InputGroup>
        {!passwordsMatch && (
          <Warning>Passwords do not match. Please try again!</Warning>
        )}
        <SavePassButtonHolder>
          <Button
            h="40px"
            w="100%"
            variant="primary"
            borderradius="20px"
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
