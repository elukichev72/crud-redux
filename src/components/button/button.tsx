import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    font-family: 'Hero';
    font-size: 14px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 20px;
    background-color: black;
    color: white;
    padding: 8px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: white;
    }
`

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', children, onClick, className }) => {
    return (
        <ButtonStyled type={type} className={className} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
