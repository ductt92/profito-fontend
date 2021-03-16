import styled from 'styled-components'


export const LoginContainerElement = styled.div`
   background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%) !important;
    perspective:800px;
    height:100vh;
    margin:0;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content: center;
`

export const FormContainerElement = styled.div`
    width:25rem;
    height:35rem;
    background:linear-gradient(45deg, #35394a 0%, #1f222e 100%);
`
export const TitleElement = styled.p`
    text-align:center;
    font-size:2rem;
`
export const InputElement = styled.input`
        color: #afb1be;
        width: 190px;
        margin-top: -2px;
        background: #32364a;
        left: 0;
        padding: 10px 65px;
        border-top: 2px solid #393d52;
        border-bottom: 2px solid #393d52;
        border-right: none;
        border-left: none;
        outline: none;
        font-family: "Gudea", sans-serif;
        box-shadow: none
`

export const ButtonContainer = styled.div`
    text-align:center
`
export const Button = styled.button`
    border-radius: 50px;
    background: transparent;
    padding: 10px 50px;
    border: 2px solid #DC6180;
    color: #DC6180;
    text-transform: uppercase;
    font-size: 11px;
    transition-property: background, color;
    transition-duration: 0.2s;
    cursor:pointer;
    &:hover {
        background: #DC6180;
        color: #fff;
        transition: background .5s ease-out;

    }
    &:focus{
        outline:none;
    }
   
`