import { FC, useEffect, useState } from "react";

import ExistingChat from "Components/ExistingChat/ExistingChat.component";
import MessageBox from "Components/MessageBox/MessageBox.component";

import {
  MessageLi,
  MessagePageContainer,
  MiniNotifyHolder,
  NotificationHolder,
  Subject,
} from "./style/MessagePage.style";
import {
  fetchMessage,
  MesagePageProps,
} from "redux/MessagePage/MessagePageSlice";
import { AppDispatch, RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
interface Notification {
  subject: string;
  message: string;
}
const MessagePage: FC<{}> = () => {
  const [notifications, setNotifications] = useState<MesagePageProps[]>([]);
  console.log(notifications);
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  console.log(userId);
  //get api
  useEffect(() => {
    if (userId) {
      dispatch(fetchMessage({ userId }))
        .then((result: any) => {
          if (fetchMessage.fulfilled.match(result)) {
            setNotifications([result.payload]);
          } else {
            console.error("Messages not found.");
          }
        })
        .catch((error: any) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [dispatch, userId]);
  return (
    <MessagePageContainer>
      <ExistingChat />
      <NotificationHolder>
        {notifications.map((notification, index) => (
          <MiniNotifyHolder key={index}>
            {notification.messages.map((message, messageIndex) => (
              <MessageLi
                key={messageIndex}
                style={{
                  background:
                    messageIndex % 2 === 0 ? "#5f59593d" : " #c1bbbb00",
                }}
              >
                <Subject>{message.subject}</Subject>
                {message.message}
              </MessageLi>
            ))}
          </MiniNotifyHolder>
        ))}
      </NotificationHolder>

      {/* <MessageBox /> */}
    </MessagePageContainer>
  );
};

export default MessagePage;
