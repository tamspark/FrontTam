import styled from "styled-components";

export const ExistingChatHolder = styled.div`
  width: 300px;
  /* height: fit-content; */
  overflow: hidden;
  background-color: #ffff;
  border: 1px solid #ccc;
  /* border-radius: 10px; */
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px 0 5px;
  width: 100%;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const UserNameParagraph = styled.p`
  margin: 0;
  font-family: "Poppins";
  /* font-weight: bold; */
  font-size: 17px;
`;
export const MessagesParagraph = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-style: italic;
  font-size: 20px;
  padding: 10px;
  margin: 15px 0px 0 0;
  flex: 1;
`;
export const InboxMessages = styled.div`
  display: flex;
  flex-direction:column;
`;
export const Span = styled.p`
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
  height: fit-content;
  padding: 10px;
  margin: 20px 0px 0 0;
`;
// export const UsersNameParagraph = styled.p`
//   margin: 0;
//   font-family: "Poppins";
//   font-weight: bold;
// `;
// export const ChatMessages = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// export const MessageContainer = styled.div<{ isIncoming: boolean }>`
//   margin-bottom: 5px;
//   border-radius: 5px;
//   background-color: ${({ isIncoming }) => (isIncoming ? "#e0e0e0" : "#aaffaa")};
// `;
// export const ChatContentHolder = styled.div`
//   display: flex;
//   margin: 10px 0;
//   padding: 10px;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;
// export const MessageCountContainer = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
// `;
// export const UserInfoContainer = styled.div`
//   flex: 1;
// `;

// export const LastMessage = styled.p`
//   margin: 0;
//   color: #555;
// `;

// export const UnreadMessagesCount = styled.span`
//   background-color: #ff3636;
//   color: #fff;
//   border-radius: 50%;
//   font-size: 12px;
//   width: 20px;
//   height: 20px;
//   text-align: center;
// `;
