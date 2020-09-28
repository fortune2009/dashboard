import React from 'react'
import { UserTitle } from '../../header/style'
import { CountDiv } from './style'

export default function Count({count}) {
    return (
        <CountDiv>
            <UserTitle color="white">
                {count}
            </UserTitle>
        </CountDiv>
    )
}
