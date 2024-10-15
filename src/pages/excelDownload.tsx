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
import { useState } from "react";

export const ExcelDown = () => {
  const [search, setSearch] = useState<string>("");
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const exercises = [
    { logo: Badminton, name: "배드민턴" },
    { logo: Pingpong, name: "탁구" },
    { logo: GirlSports, name: "여학생 스포츠" },
    { logo: Volleyball, name: "배구" },
    { logo: Baseball, name: "야구" },
    { logo: Soccer, name: "축구" },
    { logo: Gym, name: "헬스" },
    { logo: Basketball, name: "농구" },
  ];
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.includes(search)
  );
  return (
    <Wrapper>
      <TextField>
        <Title>운동 선택</Title>
        <Text>
          활동자 명단 출력을 위한 엑셀 다운로드를 희망하는 운동을 선택해주세요.
        </Text>
      </TextField>
      <SearchInput value={search} onChange={onSearch} />
      <ExerciseBox>
        {filteredExercises.map((exercise, index) => (
          <ExerciseField
            key={index}
            LogoName={exercise.logo}
            ExercizeName={exercise.name}
          />
        ))}
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
  height: 100dvh;
  align-items: center;
  flex-direction: column;
  gap: 44px;
`;
