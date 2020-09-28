import React from 'react'
import Nav from '../header'
import Menu from '../menu'
import DashboardHome from './home'
import { DashDiv, Main } from './style'

export default function Dashboard() {
    return (
        <DashDiv>
            <Menu />
            <Main>
                <Nav />
                <div>
                    <DashboardHome />
                </div>
            </Main>
        </DashDiv>
    )
}
