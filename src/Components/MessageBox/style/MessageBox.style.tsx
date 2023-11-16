import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MessageBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  
`;
export const UserInformationHolder = styled.div`
  width: 100%;
  height: 100px;
  background-color: #329a93;
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
  display: flex;
`;

export const AdminInfoContentHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;
export const AdminNameParagraph = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 500;
  color: #ffff;
`;
export const ThreeDotsHolder = styled.div`
  display: flex;
  align-items: center;
  color: #ffff;
  font-weight: bold;
  font-family: "Poppins";
  margin-right: 15px;
`;
export const Icon = styled(MoreVertIcon)``;
export const SendMessagContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
`;
export const InputHold = styled.input`
  width: 100%;
  color: black;
  border: none;
  font-family: "Poppins";
  font-size: 15px;
  text-align: left;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  word-wrap: break-word;
`;
export const AttachIconHolder = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0;
  font-size: 29px;
`;
export const SendIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 29px;
  background-color: #329a93;
  width: 60px;
  /* border-end-end-radius: 10px;
  border-inline-end-width: 10px;
  border-top-right-radius: 10px; */
`;

export const ParagraphsHolder = styled.div`
width: 100%;
height: 100%;
overflow-y: scroll; /* Enable vertical scrolling */
/* Hide the scrollbar */
scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* Internet Explorer/Edge */

/* WebKit-based browsers like Chrome and Safari */
&::-webkit-scrollbar {
  display: none;
}



`;
export const MessagesBodyHolder = styled.div`
  margin: 5px;
`;
export const IncomingMessage = styled.p`
  background-color: #ffff;
  font-family: "Poppins";
  font-size: 14px;
  text-align: left;
  width: fit-content;
  border-radius: 10px;
  padding: 5px;
  margin: 0;
`;
export const UserMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const UserMessage = styled.p`
  display: "flex";
  justify-content: flex-end;
  padding-right: 10px;
  background-color: #329a93;
  width: fit-content;
  border-radius: 10px;
  padding: 5px;
  text-align: right;
  margin: 0;
  font-family: "Poppins";
  font-size: 14px;
`;
