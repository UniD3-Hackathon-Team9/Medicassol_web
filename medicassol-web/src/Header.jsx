import React, { useState } from "react";
import * as S from "./Header.style";
import LoginModal from "./LoginModal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleRefreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <S.Container>
        <S.Buttons>
          <S.ButtonContent>저장</S.ButtonContent>
        </S.Buttons>

        <S.Buttons>
        <S.ButtonContent onClick={handleRefreshPage}>기록업데이트</S.ButtonContent>
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
          <S.ButtonContent onClick={handleOpenModal}>나가기</S.ButtonContent>
        </S.Buttons>
      </S.Container>

      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
    </>
  );
}
export default Header;
