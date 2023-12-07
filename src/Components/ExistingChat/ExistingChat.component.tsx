import { FC,useState,useEffect } from "react";

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
import styled from "styled-components";

interface Conversation {
  id: number;
  guestName: string;
  apartmentName: string;
  lastChecked:string;
  
}

const ConversationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
list-style: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const GuestName = styled.div`
  font-weight: bold;
`;



const ExistingChat: FC<{}> = () => {
  //get user firstName from store
  const email = useSelector((state: RootState) => state.auth.user?.email);
  const messages = useSelector(
    (state: RootState) => state.messages.messages?.total_items
  );
  console.log(messages);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);

  const handleGuestClick = (name: string) => {
    setSelectedGuest(name);
  };

  useEffect(() => {
    // Fetch conversations when the component mounts
    fetch('http://192.168.10.141:8080/TAM/conversation/3') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data: Conversation[]) => {
        setConversations(data);
      })
      .catch((error) => {
        // Handle error, display a message, etc.
        console.error('Error fetching conversations:', error);
      });
  }, []);

  
  return (
    <ExistingChatHolder>
      <UserProfileContainer>
        {/* <UserImage src={AdminLogo} alt="user-photo" /> */}
        <UserNameParagraph>{email}</UserNameParagraph>
      </UserProfileContainer>
      <InboxMessages>
        <div style={{display:"flex"}}>
        <div>
        <h3 style={{display:"flex",alignItems: "baseline"}}>Conversation List <Span>{messages}</Span></h3>
         <ul>
         
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <ConversationItem onClick={() => handleGuestClick(conversation.guestName)}>
              <GuestName>{conversation.guestName}</GuestName>
             
            </ConversationItem>
          </li>
        ))}
      </ul>
      <div>
        Selected Guest: {selectedGuest ? selectedGuest : "No guest selected"}
      </div></div>
     
        </div>
       
      </InboxMessages>
    </ExistingChatHolder>
  );
};

export default ExistingChat;
