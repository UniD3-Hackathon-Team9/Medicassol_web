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
  border: 1px solid #ccc;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Close = styled.span`
  align-self: flex-end;
  cursor: pointer;
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

export const SubmitButton = styled(Button)`
  background-color: #28a745;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
