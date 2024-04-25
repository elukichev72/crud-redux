import { ReactNode, FC, memo } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import { ModalContainer, ModalOverlay, ModalContent, ContentHeader, CloseButton } from './modal.styles';

type ModalProps = {
    title: string;
    children: ReactNode;
    onClose: any;
};

const Modal: FC<ModalProps> = ({ title, children, onClose }) => {
    return (
        <ModalContainer>
            <ModalOverlay />
            <ModalContent>
                <ContentHeader>
                    {title}
                    <CloseButton onClick={onClose}>
                        <CloseIcon />
                    </CloseButton>
                </ContentHeader>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default memo(Modal);
