import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = styled.div`
    postion:relative;
    display:flex;
    border-radius:20px;
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.balck + 60};
    cursor:pointer;
    transiton: all 0.3s ease;
    &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80}
    };
    scale:1.05;
}
    &:nth-child(7n+1){
    grid-column:auto/span 2;
    grid-row:auto/span 2;
    }
`;

const HoverOverlay = styled.div`
    
`;

const Prompt = styled.div`
    
`;

const Author = styled.div`

`;

const ImageCard = () => {
    return (
        <Card>
            <LazyLoadImage width="100%" src="" />
            <HoverOverlay>
                <Prompt>Prompt</Prompt>
                <Author>Aakash</Author>
            </HoverOverlay>
        </Card>
    )
}

export default ImageCard;