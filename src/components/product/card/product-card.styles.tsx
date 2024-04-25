import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 250px;
    padding: 15px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
`;

export const ProductImage = styled.img`
    width: 250px;
    height: 250px;
    object-fit: contain;
`;

export const ProductTitle = styled.h1`
    font-family: 'Hero';
    font-size: 24px;
    word-break: break-all
`;

export const ProductDescription = styled.p`
    font-family: 'Hero';
    font-size: 16px;
    word-break: break-all
`;

export const ProductPrice = styled.div`
    font-family: 'Hero';
    font-weight: bold;
    font-size: 24px;
    margin-top: auto;
`;
