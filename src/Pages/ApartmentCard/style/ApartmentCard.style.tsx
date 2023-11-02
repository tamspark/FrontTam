import styled from "styled-components";
import { Link } from "react-router-dom";
export const Holder = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  height: "fit-content";
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
export const DivsContentHolder = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Div = styled.div`
  flex: 1;
`;
export const ApartmentName = styled.h2`
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 500px;
  text-align: center;
  margin: 0;
`;
export const Paragraphs = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  padding: 5px;
  padding-left: 2px;
`;
export const UnorderedList = styled.ul``;
export const ListItem = styled.li``;
export const Label = styled.span`
  font-weight: bold;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  color: #49518f;
`;

export const IconHold = styled.div`
  padding: 10px;
`;
export const RentLink = styled(Link)`
  color: #3a23c0;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: #290ccf;
  }
`;
