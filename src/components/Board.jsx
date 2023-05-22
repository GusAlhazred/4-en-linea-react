import React from 'react'
import FichasDelRenglon from "./FichasDelRenglon.jsx"

export default function Board({tokensShowed}   /* classes*/) {
    const renglon = []
    const tokens = () => {
        for(let y=0; y<6; y++){
            let key=0;
            renglon.push(
                    <FichasDelRenglon
                        fichas={tokensShowed[y]}
                        //  /* classes*/={ /* classes*/}
                        key={key++}
                    />
                
            )
        }
        return(renglon)
    }

    // const tokens = () => {
    //     return Array.from({ length: 6 }, (v, y) => (
    //         <div className="columna" key={y}>
    //             <FichasDelRenglon
    //                 fichas={tokensShowed[y]}
    //                  /* classes*/={ /* classes*/}
    //             />
    //         </div>
    //     ));
    // };
  return (
    // <div>
    //     {tokens()}
    // </div>
    <div className="board " key={1}>
        {tokens()}
    </div>
  )
}
