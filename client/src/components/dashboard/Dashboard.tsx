import {  Outlet } from 'react-router-dom'
import { Game } from '../../Game'
import './Dashboard.css'
import GameList from '../gameList/GameList'

interface Props {
  games: Game[]
}

const Dashboard = ({games} : Props) => {
  return (
    <>
      <div className='container-gamelist'>
        <GameList games={games}/>
        <Outlet />
      </div>
      
    </>
  )
}

export default Dashboard