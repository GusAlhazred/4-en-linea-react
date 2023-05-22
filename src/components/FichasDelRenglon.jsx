import React from 'react'


export default function FichasDelRenglon({tokens, key}) {

    const dibujar = () => {
        const draw = [];
        for (let y=5; y>=0; y--){
            // for(let y=0; y<6; y++){
                if (tokens[y] === 1) {
                    draw.push(<button className="boton boton-rojo" key={key}></button>)  
                } else if (tokens[y] === 0) {
                    draw.push(<button className="boton boton-azul"  key={key}></button>)
                } else {
                    draw.push(<button className="boton"  key={key}></button>)
                }
            // }
        }
        return(draw)
    }

    // console.log(draw)

  return (
    <div className="renglon d-flex flex-column " key={key}>
        {dibujar()}
    </div>
  )
}
