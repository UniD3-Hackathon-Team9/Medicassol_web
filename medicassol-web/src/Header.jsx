import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <>
      <S.Container>
        <S.Buttons>
          <S.ButtonContent>저장</S.ButtonContent>
        </S.Buttons>

        <S.Buttons>
          <S.ButtonContent>간호기록</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>간호수행</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>수술 전 처치</S.ButtonContent>
        </S.Buttons>

        <S.Buttons>
          <S.ButtonContent>flowsheet</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>약물정보</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>검사결과</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>검체등럭</S.ButtonContent>
        </S.Buttons>
        <S.Buttons>
          <S.ButtonContent>나가기</S.ButtonContent>
        </S.Buttons>
      </S.Container>
    </>
  );
}
export default Header;
