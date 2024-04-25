import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    font-family: 'Hero';
    font-size: 14px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px;
`

type InputProps = {
    type?: 'text' | 'number' | 'password' | 'email' | 'file' | 'date' | 'radio' | 'checkbox';
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, className }) => {
    const [innerValue, setInnerValue] = useState(value ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        }
        setInnerValue(event.target.value);
    };

    return (
            <InputStyled
                type={type}
                value={innerValue}
                onChange={handleChange}
                className={className}
            />
    );
};

export default Input;
