import { FC } from "react";
//style
import {
  ChangePassH2,
  EmailInputContentHolder,
  EmailParagraph,
} from "./style/ForgetPassword.style";
import { Button, Input, StyledForm } from "App/style/App.style";

const ForgetPassword: FC<{}> = () => {
  return (
    <>
      <StyledForm height="300px">
        <ChangePassH2>Please, enter your Email!</ChangePassH2>
        <EmailParagraph>
          We will send a link to your Email address!
        </EmailParagraph>
        <EmailInputContentHolder>
          <Input
            placeholder="Email"
            type="email"
            fontFamily="sanf-serif"
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
          />
        </EmailInputContentHolder>
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderRadius="5px"
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="700"
        >
          Submit
        </Button>
      </StyledForm>
    </>
  );
};
export default ForgetPassword;
