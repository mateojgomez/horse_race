import './assets/css/App.css';
import Home from './components/Home';
import { useState } from 'react';
import { Game } from './components/Game';

function App() {
  const [startGame,setStartGame] = useState(false)
  const [bet,setBet] = useState("Oro")


  return (
    <div className="app" > 
    {startGame?
      <Game setStartGame={setStartGame} set bet={bet}></Game> 
      :
      <Home className="app" setStartGame={setStartGame} setBet={setBet} bet={bet} startGame={startGame}></Home>    
    }      
    </div>
  )

  }
  export default App;
