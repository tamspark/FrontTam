import { FC, useEffect, useState } from "react";

//styled-components
import {
  ChatContentHolder,
  ExistingChatHolder,
  LastMessage,
  MessageCountContainer,
  MessagesParagraph,
  UnreadMessagesCount,
  UserImage,
  UserInfoContainer,
  UserNameParagraph,
  UserProfileContainer,
  UsersNameParagraph,
} from "./style/ExistingChat.style";

import AdminLogo from "../ExistingChat/assets/adminlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import {
  MesagePageProps,
  fetchMessage,
} from "redux/MessagePage/MessagePageSlice";

const ExistingChat: FC<{}> = () => {
  // const [messageDetails, setMessageDetails] = useState<MesagePageProps[]>([]);
  // console.log(messageDetails);
  //get user firstName from store
  const userName = useSelector(
    (state: RootState) => state.auth.user?.firstName
  );
  // const userId = useSelector((state: RootState) => state.auth.user?.id);
  // const reservationId = useSelector(
  //   (state: RootState) => state.messages.messages
  // );
  // console.log(reservationId);
  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(fetchMessage({ userId }))
  //       .then((result: any) => {
  //         if (fetchMessage.fulfilled.match(result)) {
  //           setMessageDetails([result.payload]);
  //         } else {
  //           console.error("Messages not found.");
  //         }
  //       })
  //       .catch((error: any) => {
  //         console.error("Error fetching messages:", error);
  //       });
  //   }
  // }, [dispatch, userId]);
  return (
    <ExistingChatHolder>
      <UserProfileContainer>
        <UserImage src={AdminLogo} alt="user-photo" />
        <UserNameParagraph>{userName}</UserNameParagraph>
      </UserProfileContainer>
      <MessagesParagraph>Messages</MessagesParagraph>
      {/* {messageDetails.map((chat: MesagePageProps, index: any) => (
        <ChatContentHolder key={index}>
          <UserInfoContainer>
            <UsersNameParagraph>{chat.messages[0].subject}</UsersNameParagraph>
            <LastMessage>{chat.messages[0].message}</LastMessage>
          </UserInfoContainer>
          <MessageCountContainer> */}
            {/* {chat.unreadMessagesCount > 0 && (
              <UnreadMessagesCount>
                {chat.unreadMessagesCount}
              </UnreadMessagesCount>
            )} */}
          {/* </MessageCountContainer>
        </ChatContentHolder>
      ))} */}
    </ExistingChatHolder>
  );
};

export default ExistingChat;
