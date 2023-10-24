import styled from "styled-components";
export const ModalParagraph = styled.p`
  font-family: "Poppins";
  text-align: center;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-size: 25px;
`;
export const ModalForm = styled.div`
  /* position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; */

  width: 100vw;
  height: 100vh;
  background-color: #b9b7d8;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  /* background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  text-align: center; */
  width: 100%;
  max-width: 330px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
// export const DatePickerHolder = styled.div`
//   width: 100%;
//   display: flex;
// `;
// export const DatePickerContainer = styled.div`
//   flex: 1;
//   padding: 10px;
// `;
export const TextfieldDiv = styled.div`
  margin-top: 10px;
`;
export const XIconHolder = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  color: #636161;
`;
