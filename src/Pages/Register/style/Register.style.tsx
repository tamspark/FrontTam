import { Link } from "react-router-dom";
import styled from "styled-components";
export const RegisterParagraph = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  color: #525b99;
`;
export const Label = styled.label`
  font-style: normal;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #171616;
`;

export const ButtonContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 180px;
`;

export const LabelSpan = styled.span`
  color: red;
  font-family: "Poppins";
  font-size: 17px;
`;
export const RegisterDontHaveAccountHold = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export const RegParagraph = styled.p`
  /* padding: 0px 5px; */
  font-size: 15px;
  margin: 0;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 15px;
`;
