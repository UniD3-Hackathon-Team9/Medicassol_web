import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Brain = styled.img`
  border: 1px solid black;
  margin-bottom: 10px;
  margin-top: 10px; // Corrected margin-top value
  height: 200px;
`;

export const Medic = styled.table`
  width: 300px;
  border-collapse: collapse;
  margin-left: 10px;
`;

export const Thead = styled.thead`
  border: 1px solid black;
  height: 50px;
  margin-bottom: 10px;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  background-color: #f2f2f2;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
`;
