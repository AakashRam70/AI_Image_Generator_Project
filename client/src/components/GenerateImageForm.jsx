import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
flex:1;
padding:16px 20px;
display:flex;
flex-direction:column;
gap:9%;
justify-content:center;
`;
const Top = styled.form`
display:flex;
flex-direction:column;
gap:6px;
`;
const Title = styled.form`
font-size:28px;
font-weight:400;
color:${({ theme }) => theme.text_primary};
`;
const Desc = styled.form`
font-size:17px;
font-weight:400;
color:${({ theme }) => theme.text_secondary};
`;
const Body = styled.form`
display:flex;
flex-direction:column;
gap:18px;
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.text_secondary};
`;
const Actions = styled.form`
flex:1;
display:flex;
gap:8px;

`;

const GenerateImageForm = () => {
    return (
        <Form>
            <Top>
                <Title>Generate Images</Title>
                <Desc>Prompt</Desc>
            </Top>
            <Body>
                Body
            </Body>
            <Actions>Actions</Actions>
        </Form>
    )
}

export default GenerateImageForm