import React from 'react'
import FichasDelRenglon from "./FichasDelRenglon.jsx"
import "./styles/board.css"

export default function Board({tokens}) {
    const renglon = []
    const aLotOfTokens = () => {
        for(let x=0; x<7; x++){
            let key=0;
            renglon.push(
                    <FichasDelRenglon
                        tokens={tokens[x]}
                        key={key++}
                    />
                
            )
        }
        return(renglon)
    }

  return (
    <div className="board d-flex " key={1}>
        {aLotOfTokens()}
    </div>
  )
}
