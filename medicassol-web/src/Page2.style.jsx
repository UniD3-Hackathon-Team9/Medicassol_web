import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;

export const Brain = styled.img`
  margin: 10px 0;
  height: 200px;
  margin-left: 20px;
`;

export const Medic = styled.table`
  width: 100%;
  height: 100px;
  border-collapse: collapse;
  margin-left: 10px;
  overflow: scroll;
`;

export const ScrollView = styled.div`
  width: 400px;
  height: 25vh;
  margin-bottom: 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  height: 10px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

export const Title = styled.span`
  margin-left: 10px;
`;

export const Close = styled.span`
  align-self: flex-end;
  cursor: pointer;
  margin-top: -30px;
`;

export const RegiBtn = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
