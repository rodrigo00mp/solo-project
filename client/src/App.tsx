import Header from './components/header/Header'
import './App.css'
import { Game } from './Game'
import Dashboard from './components/dashboard/Dashboard'
import { testGames } from './Utils'
import GameDetails from './pages/GameDetails'


function App() {
  return (
    <>
    
    <div className='container-main'>
      <div className='container'>
          <Header/>
        </div>
        <div className='container'>
          <Dashboard games={testGames}/>
      
        </div>
    </div>
      
      
    </>
  )
}

export default App
