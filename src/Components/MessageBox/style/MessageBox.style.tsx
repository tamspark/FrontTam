import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MessageBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
`;
export const UserInformationHolder = styled.div`
  width: 100%;
  height: 100px;
  background-color: #329a93;
  border-radius: 20px;
  margin: 10px 0;
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
  /* border-radius: 50%; */
  margin-right: 15px;
`;
export const AdminNameParagraph = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
export const ThreeDotsHolder = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: "Poppins";
  margin-right: 15px;
`;
export const Icon = styled(MoreVertIcon)``;
export const SendMessagContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffff;
  border-radius: 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputHold = styled.input`
  color: black;
  border: none;
  font-family: "Poppins";
  font-size: large;
  /* text-align: center; */
  outline: none;
  box-sizing: border-box;

  /* width: 100%; */
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
  /* padding-right: 10px; */
  margin: 0;
  font-size: 29px;
  background-color: #329a93;
  /* border-radius: 50%; */
  width: 60px;
  border-end-end-radius: 10px;
  border-inline-end-width: 10px;
  border-top-right-radius: 10px;
`;
