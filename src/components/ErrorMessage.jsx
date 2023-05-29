import React, { useEffect , useRef } from 'react'
import "./styles/textoInformativo-styles.css"

export default function ErrorMessage( props ) {
    const message = useRef(null);
    useEffect(() => {
        (props.turn %2 === 0)? message.current.className = "jugadorAzul goUp" : message.current.className = "jugadorRojo goUp";
        message.current.innerHTML = "Nope!"

    },[])



  return (
    <div className="texto-informativo texto-error d-flex flex-column aling-items-center justify-content-center">
        <span ref={message}></span>
    </div>
  )
}
