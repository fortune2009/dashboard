import React from 'react'
import { UserTitle } from '../../header/style'
import { RecentTransactions } from './style'

export default function DashboardHome() {
    return (
        <div>
            <RecentTransactions>
                <UserTitle>Recent Transactions</UserTitle>
            </RecentTransactions>
        </div>
    )
}
