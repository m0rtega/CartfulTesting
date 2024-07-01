import React from "react";

export default function BestMatch() {

  const resultsAttributesArray = [
    {title: "Tasting Notes", icon: "1.svg", desc: "Red Apple, Lemongrass, Malt Chocolate"},
    {title: "Roast Level", icon: "4.svg", desc: "Medium"},
    {title: "Sipping Style", icon: "2.svg", desc: "Great with milk/cream"},
    {title: "Brew Methods", icon: "3.svg", desc: "Brews a delicious cup with a pour over"},
  ]

  const resultsAttributes = resultsAttributesArray.map((element, index) => {
    return (
      <div key={index} className="attr">
        <div className="title">{element.title}</div>
        <div className="content">
          <div className="icon"><img src={`/results/${element.icon}`} alt={`${element.title} icon`} /></div>
          <div className="desc">{element.desc}</div>
        </div>
      </div>
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