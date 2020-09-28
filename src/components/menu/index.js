import React from 'react'
import { UserImage } from '../header/style'
import { MenuBody, MenuDiv, MenuHead, MenuItem } from './style'
import logo from '../../assets/images/logo.png'

export default function Menu() {
    return (
        <MenuDiv>
            <MenuHead>
                <UserImage src={logo} />
            </MenuHead>
            <MenuBody>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Service Request</MenuItem>
                <MenuItem>Transaction</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Notification</MenuItem>
                <MenuItem>Settings</MenuItem>
            </MenuBody>
        </MenuDiv>
    )
}
