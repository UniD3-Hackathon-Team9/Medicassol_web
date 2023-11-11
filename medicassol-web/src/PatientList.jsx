// PatientList.jsx

import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  Table,
  Th,
  Td,
  Input,
  Button,
  AddButtonContainer,
  PatientContainer,
} from "./PatientList.style";

const response = {
  tokens: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoidGVzdDEyMzQiLCJ1c2VyVHlwZSI6ImRvY3RvciIsImlhdCI6MTY5OTczMzYwNiwiZXhwIjoxNzMxMjkxMjA2fQ.ybaU2jdQ2HIL97Z9oFFkH6_2sld-E8LU2KV8Vay-eWI",
  },
  status: "200",
};

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("https://server.medicassol.info/doctor/patient/list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${response.tokens.accessToken}`,
      },
    })
    .then((response) => {
      console.log("서버 응답:", response.data.patientList); // 서버 응답 확인
      setPatients(response.data.patientList); // 서버 응답을 patients 상태에 저장
    })
    .catch((error) => {
      console.error("에러:", error);
    });
  }, []);

  return (
    <>
      <PatientContainer>
        <Table>
          <tr>
            <Th>환자 이름</Th>
            <Th>환자 ID</Th>
            <Th>나이</Th>
            <Th>성별</Th>
            <Th>보호자 번호</Th>
            <Th>입원과</Th>
            <Th>담당간호사</Th>
            </tr>
            {patients.map((patient, index) => (
            <tr key={index} value={patient}>
              <Td>{patient.patientName}</Td>
              <Td>{patient.patientIdx}</Td>
              <Td>{patient.age}</Td>
              <Td>{patient.gender}</Td>
              <Td>{patient.guardianPhoneNumber}</Td>
              <Td>{patient.bedInfo}</Td>
            </tr>
          ))}
        </Table>
      </PatientContainer>
    </>
  );
};

export default PatientList;