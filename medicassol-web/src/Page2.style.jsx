import styled from "styled-components";

export const PageContainer = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Brain = styled.img`
  border: 1px solid black;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 200px;
`;

export const Medic = styled.table`
  width: 100%;
  height: 100px;
  border-collapse: collapse;
  margin-left: 10px;
  overflow: scroll;
`;

export const ScrollView = styled.div`
  border: 1px solid;
  width: 400px;
  height: 30vh;
  margin-bottom: 20px;

  overflow-y: auto; // 세로 스크롤 적용
  overflow-x: hidden; // 가로 스크롤 숨김
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  background-color: #f2f2f2;
  position: sticky;
  top: 0px;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 1000; 
`;

export const Modal = styled.div`
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000; 
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const Close = styled.span`
  float: right;
  cursor: pointer;
  z-index: 1000; 
`;

