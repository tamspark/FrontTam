import { FC, useState, useEffect } from "react";
import {
  AdminInfoContentHolder,
  AdminNameParagraph,
  AttachIconHolder,
  Icon,
  InputHold,
  MessageBoxContainer,
  ParagraphsHolder,
  ProfileImage,
  SendIcon,
  SendMessagContainer,
  ThreeDotsHolder,
  UserInformationHolder,
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
  updateMessages,
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
  const reservationId = useSelector(
    (state: RootState) => state.messages.messages
  );
  console.log(reservationId);
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
          setWriteMessage("");
          console.log("u kry");
          // Refetch messages after sending
          dispatch(updateMessages(response.payload));
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
            <AdminNameParagraph>Gisela Thellipi</AdminNameParagraph>
          </AdminInfoContentHolder>
          <ThreeDotsHolder>
            <Icon />
          </ThreeDotsHolder>
        </UserInformationHolder>
        {messageDetails.map((chat: MesagePageProps, index: any) => (
          <ParagraphsHolder key={index}>
            {chat.messages.map((message: any, messageIndex: any) => (
              <div key={messageIndex} style={{ margin: "5px" }}>
                {message.type === 1 ? (
                  <p
                    style={{
                      // paddingLeft: "10px",
                      background: "white",
                      width: "fit-content",
                      borderRadius: "10px",
                      padding: "5px ",
                      textAlign: "left",
                      margin: "0",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                    }}
                    dangerouslySetInnerHTML={{ __html: message.htmlMessage }}
                  >
                    {/* {message.message} */}
                  </p>
                ) : (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: "10px",
                        background: "#329a93",
                        width: "fit-content",
                        borderRadius: "10px",
                        padding: "5px ",
                        textAlign: "right",
                        margin: "0",
                        fontFamily: "Poppins",
                        fontSize: "14px",
                      }}
                      // dangerouslySetInnerHTML={{ __html: message.htmlMessage }}
                    >
                      {message.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </ParagraphsHolder>
        ))}

        <SendMessagContainer>
          <AttachIconHolder>
            <FontAwesomeIcon icon={faPaperclip} />
          </AttachIconHolder>
          <InputHold
            type="html"
            placeholder="Type a message here..."
            value={writeMessage || ""}
            onChange={(e: any) => setWriteMessage(e.target.value)}
          />
          <SendIcon>
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ flex: "1" }}
              onClick={(e: any) => handleSendMessageClick(e)}
            />
          </SendIcon>
        </SendMessagContainer>
      </MessageBoxContainer>
    </>
  );
};

export default MessageBox;
