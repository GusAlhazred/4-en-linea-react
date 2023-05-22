import React from 'react'
import "./styles/textoInformativo-styles.css"

export default function TextoInformativo( {turno} ) {
  return (
    <div className="texto-informativo d-flex justify-content-evenly container-fluid">
        <p className="">Turno: <span>{turno}</span></p>
        <p className="">Turno del jugador: {turno%2 == 0? <span className="jugadorAzul">Azul</span> : <span className="jugadorRojo">Rojo</span> }</p>
    </div>
  )
}
