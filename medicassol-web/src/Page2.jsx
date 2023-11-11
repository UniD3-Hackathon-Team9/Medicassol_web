import React from "react";
import * as S from "./Page2.style";

function Page2() {
  return (
    <S.PageContainer>
      <S.Brain src="/images/brain.png"></S.Brain>
      <S.Medic>
        <S.Thead>
          <tr>
            <S.Th>투여할 시간</S.Th>
            <S.Th>투여할 약물이름</S.Th>
            <S.Th>약물투여완료여부</S.Th>
          </tr>
        </S.Thead>
        <tbody>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
            <S.Td>투여 완료</S.Td>
          </tr>
        </tbody>

        <S.Thead>
          <tr>
            <S.Th>투여한 시간</S.Th>
            <S.Th>사용한 약물이름</S.Th>
          </tr>
        </S.Thead>
        <tbody>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
        </tbody>
      </S.Medic>
    </S.PageContainer>
  );
}

export default Page2;
