import React from 'react'


export default function FichasDelRenglon({tokens , keys}) {

    const dibujar = () => {
        const draw = [];
        for (let y=5; y>=0; y--){
            let keyToken = `button-${y}`;
                if (tokens[y] === 1) {
                    draw.push(<button className="boton boton-rojo" key={keyToken}></button>)  
                } else if (tokens[y] === 0) {
                    draw.push(<button className="boton boton-azul"  key={keyToken}></button>)
                } else {
                    draw.push(<button className="boton"  key={keyToken}></button>)
                }
            // }
        }
        return(draw)
    }

  return (
    <div className="renglon d-flex flex-column " key={keys}>
        {dibujar()}
    </div>
  )
}
