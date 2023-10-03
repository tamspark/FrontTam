import { FC } from "react";
// style

import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";

const ResetPassword: FC<{}> = () => {
  const handleClick = () => {
    console.log("U klikua!");
  };
  return (
    <>
    <StyledForm height="280px">
      <h1>Reset Password!</h1>
      <Input
        placeholder="New Password"
        type="Passowrd"
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
        placeholder="Confirm Password"
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
        fontFamily="sanf-sarif"
        fontSize="18px"
        fontWeight="700"
      >
        Submit
      </Button>
      </StyledForm>
    </>
  );
};

export default ResetPassword;
