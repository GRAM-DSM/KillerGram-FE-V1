import { useState } from "react";
import styled from "styled-components";
import { LogoImg } from "../assets";
import { Button, Input } from "../components/index";
import { useNavigate } from "react-router-dom";
import { cookies, login } from "../apis/auth";

export const Login = () => {
  const [data, setData] = useState({ account_id: "", password: "" });
  const navigate = useNavigate();
  const onEmail = (value: string): boolean => {
    const isValidEmail = value.includes("@dsm.hs.kr");

    setData(prevData => ({
      ...prevData,
      account_id: value,
    }));

    return isValidEmail;
  };
  const onPassword = (value: string): boolean => {
    setData(prevData => ({
      ...prevData,
      password: value,
    }));
    return false;
  };

  const onLogin = async () => {
    if (!data.account_id || !data.password) {
      alert("이메일과 비밀번호를 입력해 주세요.");
      return;
    }

    try {
      const res = await login(data);
      cookies.set("accessToken", res.data.accessToken);
      navigate("/excelDown");
    } catch (err) {
      alert("로그인에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Field>
          <img src={LogoImg} />
          <InputContainer>
            <Input
              type="text"
              placeholder="이메일을 입력해 주세요"
              onChange={onEmail}
              value={data.account_id}
              errorMessage="이메일이 일치하지 않습니다"
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              onChange={onPassword}
              value={data.password}
              errorMessage="비밀번호를 입력해 주세요"
            />
          </InputContainer>
        </Field>
        <Button children="로그인" onClick={onLogin} />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
