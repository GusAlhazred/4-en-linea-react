import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header"
import TextoInformativo from "./components/TextoInformativo.jsx"
import FichasAPoner from "./components/FichasAPoner.jsx"
import { useState } from 'react';
import Board from './components/Board';

function App() {

  const [turn, setTurn] = useState(1);
  const [tokens, setTokens] = useState([[ ], [ ], [ ], [ ], [ ], [ ], [ ]]);

  const manageClick = (e) => {
    const btnum = e.target.getAttribute("data-number")
    if (tokens[btnum].length <= 5){
      tokens[btnum].push(turn%2);
      setTokens(tokens)
      setTurn(turn+1)
    } else{
      console.log("No se puede")
    }
  }

  const classes = turn % 2 === 0 ? "boton boton-azul" : "boton boton-rojo";
  const buttons = [];
  for (let i=0; i<7; i++){
      buttons.push(
          <button className={classes} data-number={i} onClick={manageClick} key={i}></button>
      )
  }
  let tokensShowed =[]
  let ficha= 0;
  for (let y=0; y<6; y++){
    tokensShowed.push([])
    for(let x=0; x<7; x++){
      tokensShowed[y].push(
        <div className={classes} key={ficha++}></div>
      )
    }
    console.log(tokens)
  }
  
  
  


  return (
    <div className="App">
      <Header />
      <TextoInformativo 
        turno= {turn}
      />
      <FichasAPoner
        buttons= {buttons}
      />
      <Board
        tokensShowed= {tokensShowed}
        // classes={classes}
      />
      <button onClick={() => setTurn(turn+1)}>Pasar Turno</button>
      <button onClick={() => setTurn(1)}>Reiniciar</button>

    </div>
  );
}

export default App;
