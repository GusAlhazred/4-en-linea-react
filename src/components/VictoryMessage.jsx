import React, { useEffect, useRef } from 'react'
import BotonReset from "./BotonReset.jsx"

export default function VictoryMessage( props ) {
    let victoryColor = useRef(null);
    // const victoryPlayer = useRef(null)

    useEffect( () => {
        (props.turn-1)%2===0? (victoryColor.current.className = "jugadorAzul") : (victoryColor.current.className = "jugadorRojo");
        },[])
    useEffect( () => {
        (props.turn-1)%2===0? (victoryColor.current.innerHTML = "Gano el Jugador Azul!") : (victoryColor.current.innerHTML = "Gano el Jugador Rojo!");
        },[])

        useEffect( () => {
            if (!(props.end)) {
                victoryColor.current= null;
            }
        },[props.end])
  return (
    <div className="texto-informativo texto-victoria d-flex flex-column aling-items-center justify-content-center">
        <span ref={victoryColor}></span>
        <BotonReset 
            onClick={props.onClick}
              />
    </div>
  )
}
