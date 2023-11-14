import { FC } from "react";

//styled-components
import {
  ExistingChatHolder,
  InboxMessages,
  MessagesParagraph,
  Span,
  UserImage,
  UserNameParagraph,
  UserProfileContainer,
} from "./style/ExistingChat.style";

//import photo from assets
import AdminLogo from "../ExistingChat/assets/adminlogo.png";

//redux
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const ExistingChat: FC<{}> = () => {
  //get user firstName from store
  const email = useSelector((state: RootState) => state.auth.user?.email);
  const messages = useSelector(
    (state: RootState) => state.messages.messages?.total_items
  );
  console.log(messages);
  return (
    <ExistingChatHolder>
      <UserProfileContainer>
        {/* <UserImage src={AdminLogo} alt="user-photo" /> */}
        <UserNameParagraph>{email}</UserNameParagraph>
      </UserProfileContainer>
      <InboxMessages>
        <MessagesParagraph>Inbox</MessagesParagraph>
        <Span>{messages}</Span>
      </InboxMessages>
    </ExistingChatHolder>
  );
};

export default ExistingChat;
