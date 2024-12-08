import { AddRounded, ExploreRounded } from '@mui/icons-material'
import Button from './button'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'

const Container = styled.div`
    flex:1;
    background:${({ theme }) => theme.navbar};
    color:${({ theme }) => theme.text_primary};
    fontWeight:bold;
    fontsize:22px;
    padding:14px 50px;
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    align-items:center; 
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.15);
    @media only screen and (max-width: 600px) {
        padding:10px 12px;
    }
`

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/");
    return (
        <Container>
            GenAI
            {
                path[1] === 'post' ? (
                    <Button
                        onClick={() => navigate('/post')}
                        text="Explore Posts" leftIcon={<ExploreRounded style={{ fontSize: '18px' }} />} type='secondary'></Button>
                ) : (
                    <Button
                        onClick={() => navigate('/post')}
                        text="Create new post" leftIcon={<AddRounded style={{ fontSize: '18px' }} />}></Button>
                )
            }
        </Container>
    )
}

export default Navbar