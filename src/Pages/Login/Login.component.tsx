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
      <StyledForm height="280px">
        <h1>Login Here!</h1>
        <Input
          placeholder="Username"
          type="text"
          fontFamily="sanf-serif"
          fontSize="12px"
          fontWeight="700"
          borderbottomrightradius="20px"
          bordertoprightradius="20px"
          border="1px solid black"
          width="100%"
          height="40px"
          backgroundcolor="#FFFFFF"
          borderradius="10px"
          paddingleft="5px"
          padding="0 10px"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        ></Input>
            
            <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            fontFamily="sanf-serif"
            fontSize="12px"
            fontWeight="700"
            borderbottomrightradius="20px"
            bordertoprightradius="20px"
            border="1px solid black"
            width="100%"
            height="40px"
            backgroundcolor="#FFFFFF"
            borderradius="10px"
            paddingleft="5px"
            padding="0 10px"
          />
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
            />
          </ToggleButton>
        </InputGroup>
        <Button
          h="40px"
          w="100%"
          variant="primary"
          onClick={handleLoginClick}
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

export default Login;
