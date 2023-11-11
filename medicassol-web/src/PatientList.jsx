// PatientList.jsx

import React, { useState } from "react";
import {
  Table,
  Th,
  Td,
  Input,
  Button,
  AddButtonContainer,
  PatientContainer,
  Tbody,
  EntireScreen,
} from "./PatientList.style";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    환자이름: "",
    환자ID: "",
    나이: "",
    성별: "",
    보호자번호: "",
    입원병동호수: "",
    입원과: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addPatient = () => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    setNewPatient({
      환자이름: "",
      환자ID: "",
      나이: "",
      성별: "",
      보호자번호: "",
      입원병동호수: "",
      입원과: "",
    });
  };

  const savePatient = () => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    setNewPatient({
      환자이름: "",
      환자ID: "",
      나이: "",
      성별: "",
      보호자번호: "",
      입원병동호수: "",
      입원과: "",
    });
    alert("저장되었습니다.");
  };

  return (
    <>
        <AddButtonContainer>
          <Button onClick={addPatient}>환자 정보 추가</Button>
          <Button onClick={savePatient}>저장하기</Button>
        </AddButtonContainer>
        <PatientContainer>
        <Table>
            <tr>
              {Object.keys(newPatient).map((columnName) => (
                <Th key={columnName}>{columnName}</Th>
              ))}
            </tr>
            {patients.map((patient, index) => (
              <tr key={index}>
                {Object.keys(newPatient).map((columnName) => (
                  <Td key={columnName}>
                    <Input
                      type="text"
                      name={columnName}
                      value={patient[columnName]}
                      onChange={handleInputChange}
                    />
                  </Td>
                ))}
              </tr>
            ))}
            <tr>
              {Object.keys(newPatient).map((columnName) => (
                <Td key={columnName}>
                  <Input
                    type="text"
                    name={columnName}
                    value={newPatient[columnName]}
                    onChange={handleInputChange}
                  />
                </Td>
              ))}
            </tr>
        </Table>
      </PatientContainer>
    </>
  );
};

export default PatientList;
