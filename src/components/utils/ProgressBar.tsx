import React from "react";

interface Props {
  current: number;
}

export default function ProgressBar({current} : Props) {

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