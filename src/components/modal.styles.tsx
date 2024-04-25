import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    font-family: 'Hero';
    position: fixed;
    top: 12px;
    right: 24px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: -1;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 2px solid black;
    border-radius: 10px;
    width: 400px;
    height: 100%;
    padding: 12px;
    background-color: white;
`;

export const ContentHeader = styled.header`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
`;

export const CloseButton = styled.button`
    width: 20px;
    border: 0;
    background-color: white;
    cursor: pointer;
`;
