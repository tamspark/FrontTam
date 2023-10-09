import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "redux/authSlicer";
// style
import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";
import { AppDispatch } from "redux/store";
import {
  LoginButtonHolder,
  LoginLabel,
  LoginParagraph,
} from "./style/Login.style";

const Login: FC<{}> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  // const handleLogout = () => {

  //   dispatch(clearUser());
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
        <LoginLabel>PASSWORD</LoginLabel>
        <Input
          placeholder="Password"
          type="password"
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
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        ></Input>
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
