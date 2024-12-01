import { CircularProgress } from '@mui/material';
import React from 'react';
import styled
    from 'styled-components';

const Button = styled.div`
border-radius: 10px;
color: white;
font-size: 14px;
font-weight: 600;
corsor: pointer;
transition : all 0.3s ease;
display: flex;
justify-content: center;
align-items: center;
gap:6px;
height:min-content;
padding:10px 24px;
@media (max-width:600px){
padding:8px 12px;
}

${({ type, theme }) => type === "secondary" ? `
background:${theme.secondary};:`
        : `background:${theme.primary};`}
    ${({ isDisanled }) => isDisanled && `opacity:0.4;
    cursor:not-allowed;`}
    ${({ isLoading }) => isLoading && `cursor:not-allowed;
    opacity:0.8;`}
    ${({ flex }) =>
        flex &&
        `flex:1;`}
`;

const button = ({
    text,
    isLoading,
    isDisabled,
    rightIcon,
    leftIcon,
    type,
    flex,
    onClick
}) => {
    return (
        <Button
            onClick={() => !isDisabled && onClick()}
            type={type}
            isLoading={isLoading}
            flex={flex}
        >
            {isLoading && <CircularProgress style={{ width: "18px", height: "8px" }} />}
            {leftIcon}
            {text}
            {isLoading && <>. . .</>}
            {rightIcon}
        </Button>
    )
};

export default button;