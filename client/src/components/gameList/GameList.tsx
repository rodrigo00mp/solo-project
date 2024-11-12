import React from 'react'
import { NavLink } from 'react-router-dom'
import GameItem from '../gameItem/GameItem'
import { Game } from '../../Game'
import './GameList.css'


interface Props {
  games: Game[]
}
const GameList = ({games} : Props) => {
  return (
    <>
      <ul>
            {
              games.map(game => 
              <li key={game.id}>
                <NavLink to={`game/${game.id}`} className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => <GameItem game={game} isActive={isActive} />}
                </NavLink>
              </li>
              )
            }
      </ul>
    </>
  )
}

export default GameList