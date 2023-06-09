import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header"
import TextoInformativo from "./components/TextoInformativo.jsx"
import FichasAPoner from "./components/FichasAPoner.jsx"
import { useState /*, useEffect, /*useRef*/ } from 'react';
import Board from './components/Board';
import VictoryMessage from "./components/VictoryMessage.jsx"
import ErrorMessage from "./components/ErrorMessage.jsx"

function App() {

  const [turn, setTurn] = useState(1);
  const [tokens, setTokens] = useState([[], [], [], [], [], [], []]);
  const [end, setEnd] = useState(false);
  const [wrong, setWrong] = useState(false)
  const timer = 500;
  
  const checkVitory = () => {
    for (let x=0; x< tokens.length; x++){
      for(let y=0; y< tokens[x].length-3; y++){
        if (tokens[x][y]!==undefined){
          if ((tokens[x][y] === tokens[x][y+1]) && (tokens[x][y] === tokens[x][y+2]) && (tokens[x][y] === tokens[x][y+3])){
            setEnd(true)
          }
        }
      }
    }
    for (let x=0; x< tokens.length-3; x++){
      for(let y=0; y < tokens[x].length; y++){
        if (tokens[x][y]!==undefined){
          if ((tokens[x][y] === tokens[x+1][y]) && (tokens[x][y] === tokens[x+2][y]) && (tokens[x][y] === tokens[x+3][y])){
            setEnd(true)
          }
          if ((tokens[x][y] === tokens[x+1][y+1]) && (tokens[x][y] === tokens[x+2][y+2]) && (tokens[x][y] === tokens[x+3][y+3])){
            setEnd(true)
          }
          if ((tokens[x][y] === tokens[x+1][y-1]) && (tokens[x][y] === tokens[x+2][y-2]) && (tokens[x][y] === tokens[x+3][y-3])){
            setEnd(true)
          }
        }
      }
    }
    return(end)
  }
  
  const manageClick = (e) => {
    const btnum = e.target.getAttribute("data-number")
    if ((tokens[btnum].length <= 5) && (!end)){
      tokens[btnum].push(turn%2);
      setTokens(tokens)
      setTurn(turn+1)
      checkVitory()
    } else{
      setWrong(true)
      setTimeout( () => {
        setWrong(false)
      }, timer)
    }
  }


  const classes = turn % 2 === 0 ? "boton boton-azul" : "boton boton-rojo";
  const buttons = [];
  for (let i=0; i<7; i++){
      buttons.push(
          <button className={classes} data-number={i} onClick={manageClick} key={i}></button>
      )
  }

  
  const manageReset = () => {
    setEnd(false);
    setTurn(1);
    setTokens([[], [], [], [], [], [], []]);
  }
  
  


  return (
    <div className="App d-flex flex-column align-items-center">
      <Header />
      <TextoInformativo 
        turno= {turn}
      />
      <FichasAPoner
        buttons= {buttons}
      />
      <Board
        tokens={tokens}
      />
      {end && <VictoryMessage 
                turn={turn}
                end={end}
                onClick={manageReset}
              />}
      {wrong && <ErrorMessage 
                turn={turn}
              />}
    </div>
  );
}

export default App;
