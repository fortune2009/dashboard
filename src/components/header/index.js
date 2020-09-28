import React from 'react'
import { Header, UserDiv, UserImage, UserTitle } from './style'
import User from '../../assets/images/user.jpg'

export default function Nav() {
    return (
        <Header>
            <UserDiv>
                <UserImage w="30px" h="30px" curve src={User} alt='image'/>
                <UserTitle center>Elliot Mannie</UserTitle>
            </UserDiv>
        </Header>
    )
}
