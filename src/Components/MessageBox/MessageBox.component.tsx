import { FC } from "react";
import {
  AdminInfoContentHolder,
  AdminNameParagraph,
  Icon,
  InputHold,
  MessageBoxContainer,
  ProfileImage,
  SendMessagContainer,
  ThreeDotsHolder,
  UserInformationHolder,
} from "./style/MessageBox.style";
import AdminLogo from "../ExistingChat/assets/adminlogo.png";
import { Input } from "App/style/App.style";
const MessageBox: FC<{}> = () => {
  return (
    <>
      <MessageBoxContainer>
        <UserInformationHolder>
          <AdminInfoContentHolder>
            <ProfileImage src={AdminLogo} alt="admin/photo" />
            <AdminNameParagraph>Gisela Thellipi</AdminNameParagraph>
          </AdminInfoContentHolder>
          <ThreeDotsHolder>
            <Icon />
          </ThreeDotsHolder>
        </UserInformationHolder>
        <SendMessagContainer>
          
          <InputHold placeholder="Type a message here..."/>
        </SendMessagContainer>
      </MessageBoxContainer>
    </>
  );
};

export default MessageBox;
