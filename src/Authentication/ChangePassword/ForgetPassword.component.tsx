import { FC, useState } from "react";
import axios from "axios";
//style
import {
  ChangePassH2,
  EmailInputContentHolder,
  EmailParagraph,
} from "./style/ForgetPassword.style";
import { Button, Input, StyledForm } from "App/style/App.style";

const ForgetPassword: FC<{}> = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://192.168.10.213:8080/TAM/forgetPassword/${email}`
      );
      console.log("API Response:", response.data);

      if (response.data.success) {
        console.log(
          "Email sent successfully. Check your inbox for a reset link."
        );
      } else {
        console.log("Email not found or an error occurred.");
      }
    } catch (error) {
      console.error("Error sending reset email:", error);
      console.error("An error occurred while sending the reset email.");
    }
  };

  return (
    <>
      <StyledForm height="300px" onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
