import styled from 'styled-components/macro'

export const Header = styled.div`

    border-bottom: 2px solid #9FA3A7;
    height: 45px;
    /* background-color: rgba(29, 102, 255, 0.2); */
    width:100%;
    /* margin-left: 300px; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

export const UserDiv = styled.div`
    width:200px;
    height:35px;
    background-color: white;
    display: flex;
    border-radius: 10px;
`

export const UserImage = styled.img`
    align-self: center;
    width: ${({w})=>w?w:null};
    height: ${({h})=>h?h:null};
    border-radius: ${({curve})=>curve?'50%':'0%'};
    margin-left: 10px;
`

export const UserTitle = styled.p`
    align-self: ${({center})=>center?'center':null};
    margin-left: 5px;
    color:${({color})=>color?color:null}
`