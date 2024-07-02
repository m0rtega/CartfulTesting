import React from "react";
import Attribute from "./Attribute";

export default function BestMatch() {

  // Un array para los cuatro atributos que se describen en el Best Match,
  // así podemos iterar sus elementos dinámicamente y solo necesitamos editar un elemeno en vez de cuatro.
  const resultsAttributesArray = [
    {title: "Tasting Notes", icon: "1.svg", desc: "Red Apple, Lemongrass, Malt Chocolate"},
    {title: "Roast Level", icon: "4.svg", desc: "Medium"},
    {title: "Sipping Style", icon: "2.svg", desc: "Great with milk/cream"},
    {title: "Brew Methods", icon: "3.svg", desc: "Brews a delicious cup with a pour over"},
  ]

  // Decidí no hacerlo un componente distinto solo porque es bastante simple.
  // Aquí iteramos sobre el array de atributos y creamos un elemento por cada uno
  const resultsAttributes = resultsAttributesArray.map((element, index) => {
    return (
      <Attribute 
        key={index}
        title={element.title}
        icon={element.icon}
        desc={element.desc}
      />
    )
  })

  return (
    <div className="best-match-container">
      <div className="best-match">
        <div className="title">Best Match</div>
        <div className="icon"><img src="/results/image.png" alt="Best Match Icon" /></div>
        <div className="desc">Guatemala Coffee</div>
        <div className="price">$20.50</div>
      </div>
      <div className="content">
        <div className="why-love-it">
          <div className="title">Why you&apos;ll love it</div>
          <div className="line">If you&apos;ve ever taken a bite from a ripe red apple, you&apos;ll know the way this coffee tastes.</div>
        </div>
        <div className="attr-container">
          {resultsAttributes}
        </div>
      </div>
    </div>
  )
}