import { useState } from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange: (value: string) => boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  onChange,
  errorMessage,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const valid = onChange(newValue);
    setIsValid(valid);
  };
  return (
    <div>
      <InputContainer isValid={isValid}>
        <InputStyle
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </InputContainer>
      <ErrorMessage isValid={isValid}>{errorMessage}</ErrorMessage>
    </div>
  );
};

const InputContainer = styled.div<{ isValid: boolean }>`
  border: 1px solid ${({ isValid }) => (isValid ? "none" : "#e53a3a")};
  width: fit-content;
  margin: 0px 24px;
  border-radius: 8px;
`;
const ErrorMessage = styled.p<{ isValid: boolean }>`
  color: #e53a3a;
  font-size: 14px;
  visibility: ${({ isValid }) => (isValid ? "hidden" : "visible")};
  margin-left: 24px;
  margin-top: 4px;
`;
const InputStyle = styled.input`
  width: 342px;
  height: 56px;
  border-radius: 8px;
  background-color: #212121;
  border: none;
  color: white;
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    color: #666669;
  }
`;
