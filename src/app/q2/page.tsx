'use client'

import { useState } from "react";
import BrewButton from "../../components/q2/BrewButton";
import Link from 'next/link'
import ContinueButton from "../../components/utils/ContinueButton";
import ProgressBar from "../../components/utils/ProgressBar";
export default function Question2() {

  const [active, setActive] = useState("")

  const brewButtons = [
    {icon: "coffee-maker-desktop.svg", text: "Coffee Maker", bgcolor: "rgba(238, 180, 38, 1)"},
    {icon: "french-press-desktop.svg", text: "French Press", bgcolor: "rgba(156, 175, 150, 1)"},
    {icon: "pour-over-desktop.svg", text: "Pour Over", bgcolor: "rgba(212, 161, 166, 1)"},
    {icon: "aeropress-desktop.svg", text: "AeroPress", bgcolor: "rgba(218, 132, 100, 1)"},
    {icon: "espresso-desktop.svg", text: "Expresso", bgcolor: "rgba(169, 201, 225, 1)"},
    {icon: "pods-desktop.svg", text: "Pods", bgcolor: "rgba(196, 125, 48, 1)"},
    {icon: "moka-pot-desktop.svg", text: "Moka Pot", bgcolor: "rgba(210, 198, 195, 1)"},
  ]

  const toggleButton = (text : string) => {
    if (active.localeCompare(text) === 0) {
      setActive("")
    } else {
      setActive(text)
    }
  }

  const brewButtonsMapped = brewButtons.map((element, index) => {    
    return (
      <BrewButton 
        onclick={() => toggleButton(element.text)} 
        active={active} 
        icon={element.icon} 
        text={element.text} 
        bgcolor={element.bgcolor} 
        key={index} 
      />
    )
  })  

  return (
    <main className="question-two">
      <ProgressBar current={1}/>
      <div className="how-brew">
        How do you brew at home?
      </div>
      <div className="brew-options">
        {brewButtonsMapped}
      </div>
      <div className="q2-footer">
        <Link className="back-button" href="/"><img className="arrow" src="/q2/left-arrow.png" /><span>Back</span></Link>
        <button className="why-it-matters">Why it matters   +</button>
      </div>
      {active.localeCompare("") !== 0 ? <ContinueButton href="/results" /> : null}
    </main>
  );
}
