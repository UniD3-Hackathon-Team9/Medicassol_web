import React, {useState} from "react";
import * as S from "./Page2.style";

const Modal = ({ onClose, show, setTableData, tableData }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [medication, setMedication] = useState("");

  const handleSubmit = () => {
    const newEntry = {date, time, medication};
    setTableData([...tableData, newEntry]);
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
          onChange={(e) => setMedication(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </S.ModalContent>
    </S.Modal>
  );
};

function Page2() {
  const [showModal, setModalShow] = useState(false);
  const [tableData, setTableData] = useState([]);
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
          {tableData.map((entry, index) => (
            <tr key={index}>
              <S.Td>
                {entry.date} {entry.time}
              </S.Td>
              <S.Td>{entry.medication}</S.Td>
              <S.Td></S.Td>
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
