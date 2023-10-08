import { FC, useState } from "react";
// style

import { Input } from "App/style/App.style";
import { Button } from "App/style/App.style";
import { StyledForm } from "App/style/App.style";
import axios from "axios";
import { useNavigate } from "react-router";

const ResetPassword: FC<{}> = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    const currentUrl = window.location.href;

    try {
      const url = new URL(currentUrl);

      const pathnameParts = url.pathname.split("/");
      const token = pathnameParts[pathnameParts.length - 1];

      console.log("Token:", token);
      console.log(``);
      const requestData = {
        password: newPassword,
      };
      console.log(requestData);

      axios
        .put(
          `http://192.168.10.213:8080/TAM/resetPassword/${token}`,
          requestData
        )
        .then((response) => {
          console.log("PUT request successful:", response.data);
          navigate("/auth/login");
        })
        .catch((error) => {
          console.log("PUT request error:", error);
        });
    } catch (error) {
      console.error("Error extracting token:", error);
    }
  };

  return (
    <>
      <StyledForm height="280px" onSubmit={handleSubmit}>
        <h1>Reset Password!</h1>
        <Input
          placeholder="New Password"
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
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
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
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        ></Input>
        {!passwordsMatch && (
          <p style={{ color: "red" }}>
            Passwords do not match. Please try again.
          </p>
        )}
        <Button
          h="40px"
          w="100%"
          variant="primary"
          borderradius="5px"
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
