import React from 'react'
import styled from 'styled-components';

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

const Wrapper = styled.div`
flex:1;
height:fit-content;
width:100%;
max-widtgh:1200px;
gap:8%;
display:flex;
justify-content:center;
@media (max-width:768px){
    flex-direction:column;
}
`;

const CreatePost = () => {
    return (
        <Container>
            <Wrapper>
                CreatePost
            </Wrapper>
        </Container>
    )
}

export default CreatePost