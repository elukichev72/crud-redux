import React, { useState, memo } from 'react';
import Button from '../../button/button';
import Input from '../../input';
import styled from 'styled-components';

const TitleStyled = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`

const TextArea = styled.textarea`
    font-family: 'Hero';
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border: 1px solid black;
    border-radius: 10px;
`

type ProductModel = {
    title: string;
    description: string;
}

type ProductCreationFormProps = {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [validationError, setValidationError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title) {
            setValidationError('Title is required');
            return;
        }

        const product: ProductModel = {
            title,
            description,
        };

        onSubmit(product);
        setTitle('');
        setDescription('');
        setValidationError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TitleStyled>
                <p>Title: </p>
                <Input
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </TitleStyled>
            <TitleStyled>
                <p>Description: </p>   
                <TextArea
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
            </TitleStyled>
            {validationError && <p>{validationError}</p>}
            <Button type='submit'>
                Create
            </Button>
        </form>
    );
};

export default memo(ProductCreationForm);
