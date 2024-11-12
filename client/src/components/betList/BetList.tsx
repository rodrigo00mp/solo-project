import React from 'react'
import { Bet } from '../../Bet'
import { NavLink } from 'react-router-dom';
import BetItem from '../betItem/BetItem';

interface Props {
  bets: Bet[];
}

const BetList = ({bets} : Props) => {
  return (
      <>
        <ul>
              {
                bets.map(bet => 
                <li key={bet.id}>
                  <BetItem bet={bet}/>
                </li>
                )
              }
        </ul>
      </>
  )
}

export default BetList