import styled from "styled-components";
import {
  Badminton,
  Baseball,
  Basketball,
  GirlSports,
  Gym,
  Pingpong,
  Soccer,
  Volleyball,
} from "../assets/index";
import { ExerciseField, SearchInput } from "../components";

export const ExcelDown = () => {
  return (
    <Wrapper>
      <TextField>
        <Title>운동 선택</Title>
        <Text>
          활동자 명단 출력을 위한 엑셀 다운로드를 희망하는 운동을 선택해주세요.
        </Text>
      </TextField>
      <SearchInput />
      <ExerciseBox>
        <ExerciseField LogoName={Badminton} ExercizeName="배드민턴" />
        <ExerciseField LogoName={Pingpong} ExercizeName="탁구" />
        <ExerciseField LogoName={GirlSports} ExercizeName="여학생 스포츠" />
        <ExerciseField LogoName={Volleyball} ExercizeName="배구" />
        <ExerciseField LogoName={Baseball} ExercizeName="야구" />
        <ExerciseField LogoName={Soccer} ExercizeName="축구" />
        <ExerciseField LogoName={Gym} ExercizeName="헬스" />
        <ExerciseField LogoName={Basketball} ExercizeName="농구" />
      </ExerciseBox>
    </Wrapper>
  );
};

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 64px;
  font-weight: 600;
`;

const ExerciseBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 32px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 150dvh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 44px;
`;
