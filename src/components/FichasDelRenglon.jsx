import React, { useEffect } from 'react'


export default function FichasDelRenglon({fichas}) {
    const tokens = [];
    // console.log(fichas)
    const renderTokens = () => {
        for (let x=0; x<7; x++){
            tokens.push(
                fichas[x]
            )
        }
        return(tokens)
    }
   
    // console.log(tokens)
  return (
    <div className="renglon d-flex justify-content-center">
        {renderTokens()}
    </div>
  )
}
