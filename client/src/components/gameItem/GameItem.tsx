import { Game } from '../../Game'
import './GameItem.css'

interface Props {
  game: Game
  isActive: boolean
}

function formatDate(date: Date) {
  const optionsDate = { weekday: 'long', month: 'short', day: 'numeric' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

  const formattedDate = date.toLocaleDateString('en-US', optionsDate);
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

  return `${formattedDate} - ${formattedTime}`;
}

const GameItem = ({game, isActive}: Props) => {
  return (
    <>
      <div className={isActive ? 'container-game-active' : 'container-game'}> 
        <div className='container-teams'>
          <p>{game.awayTeam} @ {game.localTeam} </p>
        </div>
        <div className='container-date'>
          <p>{formatDate(game.date)}</p>
        </div>
      </div>
    </>
  )
}

export default GameItem