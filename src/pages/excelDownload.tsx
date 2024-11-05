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

interface Participant {
  "운동 참여자": string;
}

type ExerciseData = {
  [key: string]: Participant[];
};

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

  const exerciseData: ExerciseData = {
    헬스: [
      { "운동 참여자": "김철수" },
      { "운동 참여자": "이영희" },
      { "운동 참여자": "박지민" },
    ],
    야구: [
      { "운동 참여자": "최민수" },
      { "운동 참여자": "정다은" },
      { "운동 참여자": "이준호" },
    ],
    축구: [
      { "운동 참여자": "김은희" },
      { "운동 참여자": "장하늘" },
      { "운동 참여자": "오세훈" },
    ],
    배구: [
      { "운동 참여자": "이서연" },
      { "운동 참여자": "김하늘" },
      { "운동 참여자": "박지민" },
    ],
    탁구: [
      { "운동 참여자": "홍길동" },
      { "운동 참여자": "이수민" },
      { "운동 참여자": "최민호" },
    ],
    "여학생 스포츠": [
      { "운동 참여자": "나병현" },
      { "운동 참여자": "정현석" },
      { "운동 참여자": "윤유섭" },
    ],
    배드민턴: [
      { "운동 참여자": "김유진" },
      { "운동 참여자": "이소영" },
      { "운동 참여자": "박찬호" },
    ],
    농구: [
      { "운동 참여자": "정민수" },
      { "운동 참여자": "이정우" },
      { "운동 참여자": "한지민" },
    ],
  };

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
            ExerciseName={exercise.name}
            data={exerciseData[exercise.name] || []}
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
