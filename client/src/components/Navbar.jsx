import Button from './button';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`

const Navbar = () => {
    return (
        <Container>
            GenAI
            <Button />
        </Container>
    )
}

export default Navbar