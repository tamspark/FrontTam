import { FC } from "react";

import ExistingChat from "Components/ExistingChat/ExistingChat.component";
import MessageBox from "Components/MessageBox/MessageBox.component";

import { MessagePageContainer } from "./style/MessagePage.style";

const MessagePage: FC<{}> = () => {
  return (
    <MessagePageContainer>
      <ExistingChat />
      <MessageBox />
    </MessagePageContainer>
  );
};

export default MessagePage;
