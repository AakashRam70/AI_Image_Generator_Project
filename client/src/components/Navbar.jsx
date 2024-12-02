import { AddRounded } from '@mui/icons-material';
import Button from './button';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    background:${({ theme }) => theme.navbar};
    color:${({ theme }) => theme.text_primary};
    font-weight:bold;
    font-size:22px;
    padding : 14px 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.15);
`;

const Navbar = () => {
    return (
        <Container>
            GenAI
            <Button text="Create new Post" leftIcon={<AddRounded style={{ fontSize: "18px" }} />} />
        </Container>
    )
}

export default Navbar