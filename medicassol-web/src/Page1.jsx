import React from "react";
import * as S from "./Page1.style";

function Page1() {
  return (
    <>
      <S.Container>
        <S.Logs> 환자로그 기록화면 </S.Logs>

        <S.DoctorBox>
          <S.DoctorText cols="50" rows="10">
            {" "}
          </S.DoctorText>
          <S.SubmmitBtn>저장하기</S.SubmmitBtn>
        </S.DoctorBox>

        <S.PatientMessage> 서버한테 반환값 받아오기 </S.PatientMessage>
      </S.Container>
    </>
  );
}
export default Page1;
