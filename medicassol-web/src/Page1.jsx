// Page1.jsx
import React, { useEffect, useState } from "react";
import * as S from "./Page1.style";
import DoctorModal from "./DoctorModal";
import axios from "axios";

const response = {
  tokens: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoidGVzdDEyMzQiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTY5OTczMzYwNiwiZXhwIjoxNzMxMjkxMjA2fQ.ybaU2jdQ2HIL97Z9oFFkH6_2sld-E8LU2KV8Vay-eWI",
  },
  status: "200",
};

function Page1() {
  const [postedMessages, setPostedMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handlePostMessage = (message) => {
    setPostedMessages([...postedMessages, message]);

    const handlePostMessage = () => {
      setPostedMessages([...postedMessages, modalMessage]);

      setModalMessage("");

      handleCloseModal();
    };

    const handleShowModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleModalInputChange = (message) => {
      setModalMessage(message);
    };

    return (
      <>
        <S.Container>
          <S.DoctorBox>
            {postedMessages.map((message, index) => (
              <S.GetContent key={index}>{message}</S.GetContent>
            ))}
          </S.DoctorBox>
          {!showModal && (
            <button
              onClick={handleShowModal}
              style={{
                marginTop: "5px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",

                transition: "background-color 0.3s",
                ":active": {
                  backgroundColor: "#45a049", // Darken the color on click
                },
              }}
            >
              추가소견 작성
            </button>
          )}
          {showModal && (
            <DoctorModal
              onClose={handleCloseModal}
              onSubmit={handlePostMessage}
            />
          )}

          <S.PatientMessage></S.PatientMessage>
        </S.Container>
      </>
    );
  };
}

export default Page1;
