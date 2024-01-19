import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginLabel = styled.label`
  font-style: normal;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #171616;
`;
export const LoginParagraph = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  color: black;
`;
export const LoginButtonHolder = styled.div`
  margin: auto;
  width: 100%;
  max-width: 180px;
`;
export const DontHaveAccountHold = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
export const Paragraph = styled.p`
  /* padding: 0px 5px; */
  font-size: 15px;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 15px;
`;
