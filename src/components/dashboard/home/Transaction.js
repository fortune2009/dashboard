import React from 'react'
import { UserTitle } from '../../header/style'
import { TransactionBox } from './style'

export default function Transaction({name,amount,image,sender}) {
    return (
        <TransactionBox>
            <UserImage src={image} alt='transaction'/>
        </TransactionBox>
    )
}
