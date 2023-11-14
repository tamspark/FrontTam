import { Link } from "react-router-dom";
import styled from "styled-components";

export const TableAndDatepickerHolder = styled.div`
  width: 100%;
  height: 80%;
`;
export const TableContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-x: auto;
  position: relative;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
  font-family: "Poppins";
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 6px;
  font-family: "Poppins";
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const EditButton = styled.button`
  background-color: #4837517a;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-family: "Poppins";
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
`;
export const IconLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const H2 = styled.h2`
  font-size: 25px;
  font-family: "Poppins";
`;
