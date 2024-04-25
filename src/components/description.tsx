import { FC, memo, useState } from 'react';
import styled from 'styled-components';

const DescriptionButton = styled.button`
    font-family: 'Hero';
    font-size: 14px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 16px;
    background-color: white;
    padding: 8px;
    cursor: pointer;
    &:hover {
       background-color: black;
       color: white;
    }
`

type DescriptionProps = {
    text: string;
    maxLength: number;
};

const Description: FC<DescriptionProps> = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    let croppedText = text.length > maxLength && !isExpanded ? text.substring(0, maxLength) + '...' : text;

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p>{croppedText}</p>
            {text.length > maxLength && (
                <DescriptionButton onClick={toggleDescription}>{isExpanded ? 'Hide Details' : 'Show Details'}</DescriptionButton>
            )}
        </div>
    );
};

export default memo(Description);
