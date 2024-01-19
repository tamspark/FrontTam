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
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
   
  

  margin-left: 40px;

  
`;
export const ModalContent = styled.div`
  width: 100%;
  min-width: 330px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  @media (max-width: 767px) {
    max-width: 80%;
    min-width:200px;
    

  }
`;
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
