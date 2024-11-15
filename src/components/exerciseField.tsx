import styled from "styled-components";
import * as XLSX from "xlsx";
import { cookies, getExcel } from "../apis/auth";

interface ExerciseProps {
  LogoName: string;
  ExerciseName: string;
}

export const ExerciseField = ({ LogoName, ExerciseName }: ExerciseProps) => {
  const onGetExcel = async () => {
    try {
      const token = cookies.get("accessToken");
      const res = await getExcel({ sport: ExerciseName }, token);

      const worksheet = XLSX.utils.json_to_sheet(res.data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      XLSX.writeFile(workbook, `${ExerciseName}.xlsx`);
    } catch (err) {
      alert("엑셀 데이터 요청에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Header>
        <ImgField>
          <ExImg src={LogoName} />
        </ImgField>
        <Title>{ExerciseName}</Title>
      </Header>
      <BtnField>
        <ExcelBtn onClick={onGetExcel}>엑셀 다운로드</ExcelBtn>
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
