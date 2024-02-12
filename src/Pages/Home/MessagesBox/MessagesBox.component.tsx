import { FC, useState } from "react";

import {
  Box,
  Content,
  GetNewMessagesText,
  OpenMessagesButton,
} from "./style/MessagesBox.style";
import { useNavigate } from "react-router";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


const MessagesBox: FC<{}> = () => {
  const [userHasNewMessages, setUserHasNewMessages] = useState(false); // to do check with the backend for new messages
  const navigate = useNavigate();

  const newMessagesHandler = () => navigate('/messagepage');

  const newMessagesText = userHasNewMessages
    ? "You have new messages inbox."
    : "No new messages inbox.";

  return (
    <Box>
      <Content>
        <ForwardToInboxIcon style={{fontSize:60}}/>
        <GetNewMessagesText>{newMessagesText}</GetNewMessagesText>

        <OpenMessagesButton
            onClick={newMessagesHandler}
        >
            go to messages
        </OpenMessagesButton>
      </Content>
    </Box>
  );
};

export default MessagesBox;
