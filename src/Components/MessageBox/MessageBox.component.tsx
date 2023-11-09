import { FC } from "react";
import {
  AdminInfoContentHolder,
  AdminNameParagraph,
  AttachIconHolder,
  Icon,
  InputHold,
  MessageBoxContainer,
  ProfileImage,
  SendIcon,
  SendMessagContainer,
  ThreeDotsHolder,
  UserInformationHolder,
} from "./style/MessageBox.style";
import AdminLogo from "../ExistingChat/assets/adminlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
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
          <AttachIconHolder>
            <FontAwesomeIcon icon={faPaperclip} />
          </AttachIconHolder>

          <InputHold placeholder="Type a message here..." />
          <SendIcon>
            <FontAwesomeIcon icon={faPaperPlane} style={{ flex: "1" }} />
          </SendIcon>
        </SendMessagContainer>
      </MessageBoxContainer>
    </>
  );
};

export default MessageBox;
