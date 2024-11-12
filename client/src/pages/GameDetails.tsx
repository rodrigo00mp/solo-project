import React, { useState } from 'react'
import BetList from '../components/betList/BetList'
import { useParams } from 'react-router-dom'
import { testGames, testBets } from '../Utils'
import { Game } from '../Game'
import './GameDetails.css'
import { Bet } from '../Bet'


function formatDate(date: Date) {
  const optionsDate = { weekday: 'long', month: 'short', day: 'numeric' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

  const formattedDate = date.toLocaleDateString('en-US', optionsDate);
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

  return `${formattedDate} - ${formattedTime}`;
}
const GameDetails = () => {
  const params = useParams();
  const game : Game = testGames.find(game => game.id === parseInt(params.gameId));
  const bets: Bet[] = testBets.filter(bet => bet.gameId === parseInt(params.gameId));
  //const [bets, setBets] = useState<Bet[]>([]);

  function filterBets() {
    console.log('');
  }


  return (
    <div className='container-details'>
      <div className='container-general-info'>
        <h4>{game.awayTeam} @ {game.localTeam}</h4>
        <p>{formatDate(game.date)}</p>
      </div>
      <select className='dropdown-type-bet' name="selectedType" defaultValue={"Player"} onInput={filterBets}>
        <option value="Player">Player</option>
        <option value="Team">Team</option>
        <option value="Game">Game</option>
      </select>
      <BetList bets={bets}/>
    </div>
  )
}

export default GameDetails