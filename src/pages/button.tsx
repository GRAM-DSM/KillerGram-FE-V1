import styled from "styled-components";

interface ButtonProps {
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  width: 360px;
  height: 56px;
  border-radius: 8px;
  font-size: 16px;
  background-color: #92ff00;
  color: #315200;
  margin: 0px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
