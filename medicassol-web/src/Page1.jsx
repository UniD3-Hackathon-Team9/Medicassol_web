import React, { useState } from "react";
import * as S from "./Page1.style";

function Page1() {
  const [userInput, setUserInput] = useState("");
  const [postedMessages, setPostedMessages] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePostMessage = () => {
    if (userInput.trim() !== "") {
      setPostedMessages([...postedMessages, userInput]);
      setUserInput("");
      setShowInput(false); // Hide the input area after posting a message
    }
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  return (
    <>
      <S.Container>
        <S.DoctorBox>
          <S.GetInfo>
            <S.SomeInfo>
              <S.SomeInfoItem>의사이름:</S.SomeInfoItem>
              <S.SomeInfoItem>투약시간:</S.SomeInfoItem>
              <S.SomeInfoItem>투약병명:</S.SomeInfoItem>
            </S.SomeInfo>
            {postedMessages.length > 0 && (
              <S.Writings>
                {postedMessages.map((message, index) => (
                  <div key={index} className="message-item">
                    {message}
                  </div>
                ))}
              </S.Writings>
            )}
          </S.GetInfo>

          {showInput && (
            <S.Write>
              <input
                type="text"
                placeholder="Type your message here"
                value={userInput}
                onChange={handleInputChange}
              />
              <button onClick={handlePostMessage}>더하기</button>
            </S.Write>
          )}

          {!showInput && <button onClick={handleShowInput}>Show Input</button>}
        </S.DoctorBox>

        <S.PatientMessage> 서버한테 반환값 받아오기 </S.PatientMessage>
      </S.Container>
    </>
  );
}

export default Page1;
