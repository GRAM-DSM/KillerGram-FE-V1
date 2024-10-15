import styled from "styled-components";
import { SearchIcon } from "../assets";

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const SearchInput: React.FC<SearchProps> = ({ onChange, value }) => {
  return (
    <InputField>
      <Search
        placeholder="찾으시는 운동을 입력해주세요."
        value={value}
        onChange={onChange}
      />

      <Icon src={SearchIcon} />
    </InputField>
  );
};

const Icon = styled.img`
  cursor: pointer;
`;

const InputField = styled.div`
  background-color: #1e1e1e;
  border-radius: 60px;
  width: 712px;

  display: flex;
  padding: 19px 0px;
  align-items: center;
`;

const Search = styled.input`
  color: #ffffff;
  background-color: transparent;
  font-size: 20px;
  padding-left: 32px;
  border: none;
  outline: none;
  width: 90%;
  height: fit-content;
`;
