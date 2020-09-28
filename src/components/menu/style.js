import styled from 'styled-components/macro'

export const MenuDiv = styled.div`
    height:100vh;
    position:fixed;
    width: 300px;
    background-color:#080D28;


`

export const MenuHead = styled.div`
    width:100%;
    height: 30vh;
    display:flex;
    justify-content: center;

`

export const MenuBody = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
`

export const MenuItem = styled.p`
    color: white;
    cursor: pointer;
    height: 30px;
    width: 100%;
    font-size: 13px;

    &:hover{
        height:30px;
        background:rgba(229, 237, 252, 0.5);
    }
`
