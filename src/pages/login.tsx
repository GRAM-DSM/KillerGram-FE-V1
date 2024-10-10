import { useState } from "react";
import styled from "styled-components";
import { LogoImg } from "../assets";
import { Button, Input } from "../components/index";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onEmail = (value: string): boolean => {
    setEmail(value);
    if (value.indexOf("@dsm.hs.kr") != -1) {
      return true;
    } else {
      return false;
    }
  };
  const onPassword = (value: string): boolean => {
    setPassword(value);
    return false;
  };

  const onLogin = () => {
    navigate("/excelDown");
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
              value={email}
              errorMessage="이메일이 일치하지 않습니다"
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              onChange={onPassword}
              value={password}
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
