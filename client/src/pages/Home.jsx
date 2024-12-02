import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';

const Container = styled.div`
height:100%;
overflow-y:scroll;
background-color:${({ theme }) => theme.bg};
padding:30px 30px;
padding-bottom:50px;
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
@media (max-width:768px){
    padding:6px 10px;
}
`;

const Headline = styled.div`
    font-size:34px;
    font-weight:500;
    color:${({ theme }) => theme.text_primary};
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width:600px){
        font-size:22px;
    }
`;
const Span = styled.div`
 font-size:30px;
    font-weight:800;
    color:#bd40e3;
`;

const Home = () => {
    return (
        <Container>
            <Headline>
                Explore popular post in the community
                <Span>⦿ Generated with AI ⦿</Span>
            </Headline>
            <SearchBar/>
        </Container>
    )
}

export default Home