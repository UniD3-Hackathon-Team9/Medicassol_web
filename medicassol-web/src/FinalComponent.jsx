import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import PatientList from "./PatientList";
import Page1 from "./Page1";
import Page2 from "./Page2";

function FinalComponent() {
  // 여기서 useState를 호출
  const [patientId, setPatientId] = useState();

  const handlePatientSelect = (id) => {
    setPatientId(id);
  };
  // 컴포넌트 로직

  return (
    <>
      <Header />
      <div style={{display: "flex", flexDirection: "row"}}>
        <Page1 patientId={patientId} />
        <Page2 patientId={patientId} />
        <PatientList onPatientSelect={handlePatientSelect} />
      </div>
    </>
  );
}

export default FinalComponent;
