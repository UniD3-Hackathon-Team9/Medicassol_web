// DoctorModal.jsx
import React, { useState } from "react";
import * as S from "./DoctorModal.style";
import axios from "axios";

  const response = {
    tokens: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoidGVzdDEyMzQiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTY5OTczMzYwNiwiZXhwIjoxNzMxMjkxMjA2fQ.ybaU2jdQ2HIL97Z9oFFkH6_2sld-E8LU2KV8Vay-eWI",
    },
    status: "200",
  };
  function DoctorModal({ patientId, onClose, onSubmit, onInputChange }) {
    const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() !== "") {
      onSubmit(userInput);

      const userMessage = {
        patientIdx: patientId,
        message: userInput,
      };
      axios
        .post("https://server.medicassol.info/doctor/message", userMessage, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${response.tokens.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("에러:", error);
        });
      onSubmit();

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
