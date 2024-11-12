import React from 'react'
import { Bet } from '../../Bet'
import './BetItem.css'

interface Props {
  bet: Bet
}
const BetItem = ({bet} : Props) => {
  return (
    <>
      <div className='container-bet'> 
        <div className='container-teams'>
          <p>{bet.bet} </p>
        </div>
        <div className='container-date'>
          <p>{bet.type}</p>
        </div>
      </div>
    </>
  )
}

export default BetItem