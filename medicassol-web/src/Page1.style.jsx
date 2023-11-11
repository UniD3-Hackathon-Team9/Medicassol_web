// Page1.style.js

import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const Logs = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
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

export const SubmmitBtn = styled.button`
  margin-top: -10px;
  width: 50%;
  height: 40px;

  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const DoctorText = styled.textarea`
  width: 100%;
  height: 120px;
  border: 1px solid black;
  margin-top: 10px;
  resize: none;
  padding: 10px;
`;

export const PatientMessage = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;
