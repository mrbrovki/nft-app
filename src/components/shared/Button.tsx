import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps{
  children?: ReactNode
  background: string;
  color: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.background};
  color: ${props => props.color};
  height: 2rem;
  width: 10rem;
  border: none;
  border-radius: 1.5rem;
  font-weight: 600;

  &:hover{
    cursor: pointer;
  }
`;

const Button:FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export default Button;