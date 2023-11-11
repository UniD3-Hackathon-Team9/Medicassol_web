import React, { useState } from "react";
import axios from "axios"; // Import Axios

import * as S from "./LoginModal.style"; // Create a new style file for Modal if needed

function LoginModal({ onClose }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      id: id,
      password: password,
    };

    axios
      .post("https://server.medicassol.info/doctor/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Token: ", response.data);
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      });

    onClose();
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <label>ID:</label>
        <input type="text" value={id} onChange={handleIdChange} />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default LoginModal;
