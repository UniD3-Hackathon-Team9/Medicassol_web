// DoctorModal.jsx
import React, { useState } from "react";
import * as S from "./DoctorModal.style";

function DoctorModal({ onClose, onSubmit }) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() !== "") {
      onSubmit(userInput);
      setUserInput("");
      onClose();
    }
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <input
          type="text"
          placeholder="Type your message here"
          value={userInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>추가하기</button>
        <button onClick={onClose}>취소하기</button>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default DoctorModal;
