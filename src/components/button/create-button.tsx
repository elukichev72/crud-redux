import { FC, memo } from 'react';
import styled from 'styled-components';

const CreateButtonContainer = styled.button`
    font-family: 'Hero';
    font-size: 24px;
    font-weight: bold;
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: white;
    }
`;

type CreateButtonProps = {
    handleModalOpen: () => void;
}

const CreateButton: FC<CreateButtonProps> = ({handleModalOpen}) => {
    return <CreateButtonContainer onClick={handleModalOpen}>+</CreateButtonContainer>;
};

export default memo(CreateButton)
