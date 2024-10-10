import styled from "styled-components";
import { HeaderLogo } from "../assets";

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <Field>
        <Logo src={HeaderLogo} />
        <OptionContainer>
          <Option>엑셀 다운로드</Option>
          <Option>일정 변경</Option>
        </OptionContainer>
      </Field>
      <UserName>김현태 선생님</UserName>
    </Wrapper>
  );
};

const Field = styled.div`
  display: flex;
  gap: 102px;
`;

const OptionContainer = styled.div`
  display: flex;
  gap: 52px;
  height: fit-content;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 32px 0px;
  justify-content: space-between;
`;
const Logo = styled.img`
  margin-left: 32px;
`;
const Option = styled.p`
  color: #585858;
  height: fit-content;
  font-size: 20px;
  margin-top: 5px;
`;

const UserName = styled.p`
  color: #ffffff;
  height: fit-content;
  font-size: 20px;
  margin-top: 5px;
  margin-right: 32px;
`;
