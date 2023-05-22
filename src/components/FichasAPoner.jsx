import React from 'react'
import "./styles/FichasAPoner.css"

export default function FichasAPoner( { buttons }) {
    
  return (
    <div className="container-FichasAPoner d-flex justify-content-center m-3">
        {buttons}
    </div>
  )
}
