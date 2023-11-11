import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 7px;
`;

export const SomeInfo = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SomeInfoItem = styled.div`
  margin-left: 10px;
  display: inline;
`;

export const GetContent = styled.text`
  margin-left: 10px;
  display: inline;
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
  width: 104%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* margin-bottom: 10px; */
  margin-left: -5px;
`;

export const PatientMessage = styled.div`
  width: 80%;
  margin-right: -30px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: -30px;
  border: 2px solid #333;
  border-radius: 5px;
`;
