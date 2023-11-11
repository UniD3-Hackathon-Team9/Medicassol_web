// Page1.jsx
import React, { useState } from "react";
import * as S from "./Page1.style";
import DoctorModal from "./DoctorModal";

function Page1() {
  const [postedMessages, setPostedMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
          <S.GetContent> {modalMessage}</S.GetContent>

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
                marginLeft: "25px",
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
              onInputChange={handleModalInputChange}
            />
          )}
        </S.DoctorBox>

        <S.PatientMessage></S.PatientMessage>
      </S.Container>
    </>
  );
}

export default Page1;
