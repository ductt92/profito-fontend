import styled from 'styled-components'

export const Nav = styled.nav`
    background:#000;
    height:80px;
    display:flex;
    justify-content:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transiton : all 0.8s ease;
    }
`

export const NavbarContainer= styled.div`
    display:flex;
    justify-conten:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width:1100px;
`