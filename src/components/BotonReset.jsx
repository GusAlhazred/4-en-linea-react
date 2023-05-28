import React from 'react'
import "./styles/botonera.css"

export default function BotonReset( { onClick }) {
  return (
    <div className="botonera d-flex justify-content-center">
        <button onClick={onClick} className="resetButton">Reset</button>
    </div>
  )
}
