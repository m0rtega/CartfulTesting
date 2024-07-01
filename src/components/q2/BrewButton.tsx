'use client'

import React, { useEffect } from "react";

interface Props {
  icon: string;
  text: string;
  bgcolor: string;
  onclick: () => void;
  active: string;
}

export default function BrewButton({icon, text, bgcolor, onclick, active}: Props) {  

  const greyed = active.localeCompare("") != 0 && active.localeCompare(text) != 0;
  
  return (
    <button 
      onClick={onclick} 
      className="brew-button" 
      style={{backgroundColor: greyed ? "rgba(233, 228, 219, 1)" : bgcolor}}
    >      
      <div>
        <img src={`/q2/${icon}`} alt={`${text} icon`}/>
      </div>
      <div>{text}</div>
    </button>    
  )
}