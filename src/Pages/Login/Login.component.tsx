import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, clearUser, logoutUser } from "redux/authSlicer";
// style
import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";
import { InputGroup } from "App/style/App.style";
import { ToggleButton } from "App/style/App.style";
import { AppDispatch } from "redux/store";
import { useNavigate } from "react-router";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LoginButtonHolder,
  LoginLabel,
  LoginParagraph,
} from "./style/Login.style";

const Login: FC<{}> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  const handleLoginClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const userCredentials = {
      email: email || "",
      password: password || "",
    };

    console.log(typeof userCredentials);
    await dispatch(loginUser(userCredentials));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state when the button is clicked
  };

  // const handleLogout = (userId: number) => {
  //   try {
  //     dispatch(logoutUser(userId)).then(() => {
  //       dispatch(clearUser());
  //       navigate("/auth/login");
  //     });
  //   } catch (error) {
  //     console.error("Synchronous error:", error);
  //   }
  // };

  return (
    <>
      <StyledForm height="fit-content">
        <LoginParagraph>LOGIN</LoginParagraph>
        <LoginLabel>USERNAME</LoginLabel>
        <Input
          placeholder="Username"
          type="text"
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
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        ></Input>
        <LoginLabel>PASSWORD</LoginLabel>{" "}
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
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
          />
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </ToggleButton>
        </InputGroup>
        <LoginButtonHolder>
          <Button
            h="40px"
            w="100%"
            variant="primary"
            onClick={handleLoginClick}
            borderradius="20px"
            fontSize="17px"
          >
            Submit
          </Button>
        </LoginButtonHolder>
      </StyledForm>
    </>
  );
};

export default Login;
