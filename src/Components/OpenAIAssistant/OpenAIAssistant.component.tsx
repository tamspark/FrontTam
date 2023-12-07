import React, { useState, useEffect } from "react";
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';

import {
  Header,
  ChatContainer,
  ChatIcon,
  ChatToggle,
  MessageContainer,
  MessageBubble,
  SendButton,
  InputContainer,
  Input,
  UserMessageBubble,
  BotMessageBubble,
} from "./Assistant.style";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
     { id: 1, text: "Hi there!", sender: 'bot' },
     { id: 2, text: "This is TAM Chatbox! How can I help you?", sender: 'bot' },
   ]);
   
   const [newMessage, setNewMessage] = useState<string>('');
 
   const sendMessage = () => {
     const userMessage: Message = { id: messages.length + 1, text: newMessage, sender: 'user' };
     setMessages((prevMessages) => [...prevMessages, userMessage]);
     setNewMessage('');
 
   
     setTimeout(() => {
       const botResponse: Message = { id: messages.length + 2, text: "We are at Sparklab offices!", sender: 'bot' };
       setMessages((prevMessages) => [...prevMessages, botResponse]);
     }, 1000); 
   };
 
   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
   
  };
 
  const handleToggle = () => {
     setIsOpen(!isOpen);
    //  if (!isOpen) {
    // //    fetchMessages();
    //  }
   };

   const handleInputKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents the new line on "Enter" press
      sendMessage();
    }
  };

  return (
    <>
      <Header isOpen={isOpen} onClick={handleToggle}>
        TAM Chat
      </Header>
      <ChatContainer isOpen={isOpen}>
        {isOpen && (
          <>
          <MessageContainer>
        {messages.map((message) => (
          <div key={message.id}>
            {message.sender === 'user' ? (
              <UserMessageBubble>{message.text}</UserMessageBubble>
            ) : (
              <BotMessageBubble>{message.text}</BotMessageBubble>
            )}
          </div>
        ))}
      </MessageContainer>
            <InputContainer>
              <Input
                rows={4}
                value={newMessage}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
              />
              <SendButton onClick={sendMessage}><SendIcon fontSize="small"/></SendButton>
            </InputContainer>
          </>
        )}
        <ChatToggle isOpen={isOpen} onClick={handleToggle}>
          <ChatIcon>💬</ChatIcon>
        </ChatToggle>
      </ChatContainer>
    </>
  );
};

export default ChatComponent;
