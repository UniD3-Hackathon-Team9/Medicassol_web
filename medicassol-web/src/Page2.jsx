import React, {useState, useEffect} from "react";
import * as S from "./Page2.style";
import axios from "axios";

const response = {
  tokens: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoidGVzdDEyMzQiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTY5OTczMzYwNiwiZXhwIjoxNzMxMjkxMjA2fQ.ybaU2jdQ2HIL97Z9oFFkH6_2sld-E8LU2KV8Vay-eWI",
  },
  status: "200",
};

const fetchData = (patientIdx, option) => {
  axios.get("https://server.medicassol.info/doctor/patient/history", {
    params: {
      patientIdx: patientIdx,
      option: option
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${response.tokens.accessToken}`,
    },
  })
  .then((response) => {
    // 응답 처리
  })
  .catch((error) => {
    console.error("에러:", error);
  });
};

const Modal = ({onClose, show, setTableData, tableData}) => {
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
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    fetchData(1,2);
  }, []);

  return (
    <S.PageContainer>
      <S.Brain src="/images/brain.png"></S.Brain>
      <div>
        <button onClick={() => setModalShow(true)}>투약정보작성</button>
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
          {patientData.map((entry, index) => (
            <tr key={index}>
              <S.Td>
                {entry.willMedicateAt}
              </S.Td>
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
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
          <tr>
            <S.Td>2023-02-11</S.Td>
            <S.Td>ab</S.Td>
          </tr>
        </S.Medic>
      </S.ScrollView>
    </S.PageContainer>
  );
}

export default Page2;
