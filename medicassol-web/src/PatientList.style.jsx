// PatientList.style.js

import styled from "styled-components";

export const PatientContainer = styled.div`
margin-top: 100px;
border: 1px solid;
width: 40%;
height: 100%;
float: right;
}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  color: black;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-left: 5px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

export const AddButtonContainer = styled.div`
  margin-bottom: 10px;
  flex: display;
  flex-direction: row;
`;
