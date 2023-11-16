import { FC, useState, useEffect } from "react";
import {
  AdminInfoContentHolder,
  AdminNameParagraph,
  AttachIconHolder,
  Icon,
  IncomingMessage,
  InputHold,
  MessageBoxContainer,
  MessagesBodyHolder,
  ParagraphsHolder,
  ProfileImage,
  SendIcon,
  SendMessagContainer,
  ThreeDotsHolder,
  UserInformationHolder,
  UserMessage,
  UserMessageContainer,
} from "./style/MessageBox.style";
import AdminLogo from "../ExistingChat/assets/adminlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import {
  MesagePageProps,
  fetchMessage,
  sendMessage,
} from "redux/MessagePage/MessagePageSlice";
const MessageBox: FC<{}> = () => {
  const [messageDetails, setMessageDetails] = useState<MesagePageProps[]>([]);
  const [writeMessage, setWriteMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  console.log(writeMessage);
  console.log(messageDetails);
  //get user firstName from store
  // const userName = useSelector(
  //   (state: RootState) => state.auth.user?.firstName
  // );
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  console.log(userId)
  // const reservationId = useSelector(
  //   (state: RootState) => state.messages.messages
  // );
  // console.log(reservationId);
  const dispatch: AppDispatch = useDispatch();

  //post request
  const messageProps = {
    subject: "Hi",
    messageBody: writeMessage,
  };

  const handleSendMessageClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (userId) {
      try {
        const response = await dispatch(sendMessage({ userId, messageProps }));

        if (sendMessage.fulfilled.match(response)) {
          // Refetch messages after sending
          const fetchResponse = await dispatch(fetchMessage({ userId }));
          if (fetchMessage.fulfilled.match(fetchResponse)) {
            setMessageDetails([fetchResponse.payload]);
            setWriteMessage("");
          }
        }
      } catch (error) {
        console.log("Error in handleModalClick:", error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  //get api
  useEffect(() => {
    if (userId) {
      dispatch(fetchMessage({ userId }))
        .then((result: any) => {
          if (fetchMessage.fulfilled.match(result)) {
            setMessageDetails([result.payload]);
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
    <>
      <MessageBoxContainer>
        <UserInformationHolder>
          <AdminInfoContentHolder>
            <ProfileImage src={AdminLogo} alt="admin-photo" />
            <AdminNameParagraph>Redis Halili</AdminNameParagraph>
          </AdminInfoContentHolder>
          <ThreeDotsHolder>
            <Icon />
          </ThreeDotsHolder>
        </UserInformationHolder>
        {messageDetails.map((chat: MesagePageProps, index: any) => (
          <ParagraphsHolder key={index}>
            {chat.messages.map((message: any, messageIndex: any) => (
              <MessagesBodyHolder key={messageIndex}>
                {message.type === 1 ? (
                  <IncomingMessage
                    dangerouslySetInnerHTML={{ __html: message.htmlMessage }}
                  >
                    {/* {message.message} */}
                  </IncomingMessage>
                ) : (
                  <UserMessageContainer>
                    <UserMessage

                    // dangerouslySetInnerHTML={{ __html: message.htmlMessage }}
                    >
                      {message.message}
                    </UserMessage>
                  </UserMessageContainer>
                )}
              </MessagesBodyHolder>
            ))}
          </ParagraphsHolder>
        ))}

        <SendMessagContainer>
          <AttachIconHolder>
            <FontAwesomeIcon icon={faPaperclip} style={{ fontSize: "20px" }} />
          </AttachIconHolder>
          <InputHold
            type="text"
            placeholder="Type a message here..."
            value={writeMessage || ""}
            onChange={(e: any) => setWriteMessage(e.target.value)}
          />
          <SendIcon>
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ flex: "1", fontSize: "20px" }}
              onClick={(e: any) => handleSendMessageClick(e)}
            />
          </SendIcon>
        </SendMessagContainer>
      </MessageBoxContainer>
    </>
  );
};

export default MessageBox;
