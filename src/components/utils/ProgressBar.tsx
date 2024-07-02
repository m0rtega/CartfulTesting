import React from "react";

interface Props {
  current: number;
}

// La barra de progreso que se muestra en la pregunta 2 y en los resultados.
export default function ProgressBar({current} : Props) {

  // Creamos 6 circulos con el actual en amarillo, los previos en negro y los demás en blanco.
  const progresBarSteps = [...Array(6)].map((_, i) => {

    if (i < current) {
      return <div className="step answered" key={i}>{i+1}</div>
    } else if (i === current) {
      return <div className="step current" key={i}>{i+1}</div>
    }

    return <div className="step" key={i}>{i+1}</div>
  }  
)

  return (
    <div className="progress-bar">
      {progresBarSteps}  
    </div>    
  )
}