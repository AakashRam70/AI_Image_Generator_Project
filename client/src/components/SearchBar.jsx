import React from 'react'
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';

const SearchBarContainer = styled.div`
    max-width:550px;
    display:flex;
    width:90%;
    border:1px solid ${({ theme }) => theme.text_secondary + 90};
    color:${({ theme }) => theme.text_primary + 90};
    border-radius:8px;
    padding:12px 16px;
    cursor:pointer;
    gap:6px;
    align-items:center;
`;
const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchOutlined>
                <input type='text' style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    color: "inherit",
                    background: "transparent"
                }} />
            </SearchOutlined>
        </SearchBarContainer>
    )
}

export default SearchBar;