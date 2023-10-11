import { FC, useState } from "react";

import { Button, StyledForm } from "App/style/App.style";
import { Input } from "App/style/App.style";
import {
  LoginButtonHolder,
  LoginLabel,
  LoginParagraph,
} from "Pages/Login/style/Login.style";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Verification: FC<{}> = () => {
    const userSelector = (state: RootState) => state.auth.user; // Use RootState here
    const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated; // Use RootState here
 
  const [clientId, setClientId] = useState<string>("");
  const [clientAPIKey, setClientAPIKey] = useState<string>("");

  const user = useSelector(userSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  
  const userId=user?.id;

  console.log(isAuthenticated);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
        clientId: clientId,
        clientAPIKey: clientAPIKey,
        userId: userId,
    };
    console.log(postData);
    try {
      const response = await axios.post(
        "http://192.168.10.210:8080/TAM/smoobuAccount",
        postData
      );

      console.log("POST request successful:", response.data);
    } catch (error) {
      console.error("POST request error:", error);
    }
  };

  return (
    <div>
    
        <div>
       
          <StyledForm height="300px">
            <LoginParagraph>Verification</LoginParagraph>
            <LoginLabel>Client ID</LoginLabel>
            <Input
              placeholder="ClientID"
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
              value={clientId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClientId(e.target.value)
              }
            ></Input>
            <LoginLabel>Security Key</LoginLabel>
            <Input
              placeholder="Security Key"
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
              value={clientAPIKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClientAPIKey(e.target.value)
              }
            ></Input>

            <LoginButtonHolder>
              <Button
                h="40px"
                w="100%"
                variant="primary"
                onClick={handleSubmit}
                borderradius="20px"
                fontSize="17px"
              >
                Submit
              </Button>
            </LoginButtonHolder>
          </StyledForm>
        </div>
     
    </div>
  );
};

export default Verification;
