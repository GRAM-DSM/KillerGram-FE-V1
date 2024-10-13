import styled from "styled-components";

interface ExerciseProps {
  LogoName: string;
  ExercizeName: string;
}

export const ExerciseField: React.FC<ExerciseProps> = ({
  LogoName,
  ExercizeName,
}) => {
  return (
    <Wrapper>
      <Header>
        <ImgField>
          <ExImg src={LogoName} />
        </ImgField>
        <Title>{ExercizeName}</Title>
      </Header>
      <BtnField>
        <ExcelBtn>엑셀 다운로드</ExcelBtn>
      </BtnField>
    </Wrapper>
  );
};

const ExImg = styled.img``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BtnField = styled.div`
  display: flex;
  justify-content: center;
`;

const ExcelBtn = styled.button`
  background-color: #9eff00;
  border: none;
  padding: 16px 32px;
  font-size: 20px;
  border-radius: 56px;
  cursor: pointer;
`;

const ImgField = styled.div`
  display: flex;
  justify-content: center;
  height: 183px;
`;

const Title = styled.p`
  font-size: 20px;
  color: #a2a2a2;
  text-align: center;
`;
const Wrapper = styled.div`
  gap: 24px;
  background-color: #1e1e1e;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 302px;
  height: 340px;
`;
