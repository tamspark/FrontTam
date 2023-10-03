import { FC } from "react";
// style

import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";

const Login: FC<{}> = () => {
  const handleClick = () => {
    console.log("U klikua!");
  };
  return (
    <>
      <StyledForm  height="280px">
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
        ></Input>
        <Input
          placeholder="Password"
          type="password"
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
        ></Input>
        <Button
          h="40px"
          w="100%"
          variant="primary"
          onClick={handleClick}
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
