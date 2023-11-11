import React, { useState, useEffect } from "react";
import * as S from "./Page2.style";
import axios from "axios";

const response = {
  tokens: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoidGVzdDEyMzQiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTY5OTczMzYwNiwiZXhwIjoxNzMxMjkxMjA2fQ.ybaU2jdQ2HIL97Z9oFFkH6_2sld-E8LU2KV8Vay-eWI",
  },
  status: "200",
};

const Modal = ({ onClose, show, setTableData, tableData }) => {
  const [medication, setMedication] = useState("");
  const [medicineIdx, setMedicineIdx] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    const medicateAt = `${date} ${time}`; // 날짜와 시간 결합
    const newEntry = {
      patientIdx: 1, // 문자열을 정수로 변환
      medicineIdx: 1,
      medicateAt: medicateAt,
    };
    axios
      .post("https://server.medicassol.info/doctor/medication", newEntry, {
        headers: {
          Authorization: `Bearer ${response.tokens.accessToken}`,
        },
      })
      .then((response) => {
        console.log("POST 성공:", response);
        // 추가적인 작업 (예: 테이블 데이터 업데이트)
        setTableData([...tableData, newEntry]);
      })
      .catch((error) => {
        console.error("POST 실패:", error);
      });
    onClose(); // 모달 닫기
  };

  if (!show) {
    return null;
  }

  return (
    <S.Modal>
      <S.ModalContent>
        <S.Close onClick={onClose}>&times;</S.Close>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          step="600" // 10분 단위로 설정
        />
        <input
          type="text"
          placeholder="Medication Name"
          value={medication}
          onChange={(e) => setMedicineIdx(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </S.ModalContent>
    </S.Modal>
  );
};

function Page2() {
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [patientData1, setPatientData1] = useState([]);
  const [patientData2, setPatientData2] = useState([]);

  const fetchData = (patientIdx) => {
    axios
      .get("https://server.medicassol.info/doctor/patient/history", {
        params: {
          patientIdx: patientIdx,
          option: 2,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${response.tokens.accessToken}`,
        },
      })
      .then((response) => {
        setPatientData1(response.data.patientHistory);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
    axios
      .get("https://server.medicassol.info/doctor/patient/history", {
        params: {
          patientIdx: patientIdx,
          option: 1,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${response.tokens.accessToken}`,
        },
      })
      .then((response) => {
        setPatientData2(response.data.patientHistory);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  };
  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <S.PageContainer>
      <S.Brain src="/images/brain.png"></S.Brain>
      <div>
        <button
          style={{ marginBottom: "3px" }}
          onClick={() => setModalShow(true)}
        >
          투약정보작성
        </button>

        <Modal
          onClose={() => setModalShow(false)}
          show={showModal}
          setTableData={setTableData}
          tableData={tableData}
        />
      </div>

      <S.ScrollView>
        <S.Medic>
          <tr>
            <S.Th>투여할 시간</S.Th>
            <S.Th>투여할 약물이름</S.Th>
            <S.Th>약물투여완료여부</S.Th>
          </tr>
          {patientData1.map((entry, index) => (
            <tr key={index}>
              <S.Td>{entry.willMedicateAt}</S.Td>
              <S.Td>{entry.mediName}</S.Td>
              <S.Td>{entry.isDone}</S.Td>
            </tr>
          ))}
        </S.Medic>
      </S.ScrollView>
      <S.ScrollView>
        <S.Medic>
          <tr>
            <S.Th>투여한 시간</S.Th>
            <S.Th>사용한 약물이름</S.Th>
          </tr>
          {patientData2.map((entry, index) => (
            <tr key={index}>
              <S.Td>{entry.willMedicateAt}</S.Td>
              <S.Td>{entry.mediName}</S.Td>
            </tr>
          ))}
        </S.Medic>
      </S.ScrollView>
    </S.PageContainer>
  );
}

export default Page2;
