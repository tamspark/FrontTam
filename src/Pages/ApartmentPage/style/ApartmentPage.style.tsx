import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ApartmentContentHolder = styled.div`
  width: 100%;
  height: 100px;
  max-width: 180px;
  padding: 10px 5px 10px 5px;
  margin: 10px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: 2px solid white;
  color: white;
  font-family: "Poppins";
`;
export const Icon = styled.div`
  text-align: center;
  font-size: larger;
`;
export const ApartmentNameParagraph = styled.p`
  text-align: center;
`;
export const ErrorMessage = styled.p`
  color: #b42828;
  font-family: "Poppins";
  font-size: 17px;
  text-align: center;
`;
