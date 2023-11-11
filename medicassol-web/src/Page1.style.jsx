// Page1.style.js

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
export const SomeInfo = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const SomeInfoItem = styled.div`
  margin-left: 10px;
  display: inline;
`;

export const GetInfo = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
`;

export const Writings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .message-item {
    margin-bottom: 5px;
    padding: 5px;
  }
`;

export const Write = styled.div`
  color: black;
`;

export const DoctorBox = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const PatientMessage = styled.div`
  border: 1px solid black;
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;
