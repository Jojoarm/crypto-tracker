import React from 'react'
import './CoinSummary.css'
import AddCoin from './AddCoin'
import CoinList from './CoinList'

const CoinSummary = () => {
    return (
        <div>
            <AddCoin />
            <CoinList />
        </div>
    )
}

export default CoinSummary
