// Page1.jsx
import React, {useState, useEffect} from "react";
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
  const [modalMessage, setModalMessage] = useState("");
  const fetchMessages = (patientIdx) => {
    axios
      .get(
        "https://server.medicassol.info/doctor/message",
        {
          params: { patientIdx:  1},
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${response.tokens.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPostedMessages(response.data.doctorMessage); // 예시: 서버 응답이 messages 배열을 포함하고 있다고 가정
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    fetchMessages(1);
  }, []);

  const handlePostMessage = (message) => {
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
          {postedMessages.map((doctorMessage, index) => (
            <S.GetContent key={index}>{doctorMessage.message}<br /> {doctorMessage.createdAt}<br /> <br /> </S.GetContent>
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

        <S.PatientMessage>{modalMessage}</S.PatientMessage>
      </S.Container>
    </>
  );
}

export default Page1;
