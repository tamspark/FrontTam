import { FC } from "react";

import ExistingChat from "Components/ExistingChat/ExistingChat.component";
import MessageBox from "Components/MessageBox/MessageBox.component";

import { MessagePageContainer } from "./style/MessagePage.style";

const MessagePage: FC<{}> = () => {
  return (
    <div style={{width:"100vw",display:"flex", justifyContent:"center"}}>
    <MessagePageContainer>
      <ExistingChat />
      <MessageBox />
    </MessagePageContainer>
    </div>
  );
};

export default MessagePage;



