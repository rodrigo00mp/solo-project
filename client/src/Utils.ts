import { Game } from "./Game";
import { Bet } from "./Bet";

export const testGames : Game[] = [
  {
    id:1,
    localTeam : 'Washington',
    awayTeam : 'Philadelphia',
    date: new Date()
  },
  {
    id:2,
    localTeam : 'Atlanta',
    awayTeam : 'Denver',
    date: new Date()
  }

];

export const testBets : Bet[] = [
  {
    id: 1,
    gameId : 1,
    type: 'Player',
    bet: 'Hurts Over 1.5 TD passes',
    explanation: 'sdfsdlfknklvndfklvdfklvdfklvdfklv'
  },
  {
    id: 1,
    gameId : 1,
    type: 'Team',
    bet: 'Philadelphia wins',
    explanation: 'sdfsdlfknklvndfklvdfklvdfklvdfklv'
  },
  {
    id: 1,
    gameId : 2,
    type: 'Player',
    bet: 'Cousins Under 1.5 Interceptions',
    explanation: 'sdfsdlfknklvndfklvdfklvdfklvdfklv'
  },
  {
    id: 1,
    gameId : 2,
    type: 'Game',
    bet: 'Under 44.5 Total',
    explanation: 'sdfsdlfknklvndfklvdfklvdfklvdfklv'
  },

];

