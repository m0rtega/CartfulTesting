import React from "react";

interface Props {
  title: string;
  icon: string;
  desc: string;
}

export default function Attribute({title, icon, desc}: Props) {  
  
  return (
    <div className="attr">
      <div className="title">{title}</div>
      <div className="content">
        <div className="icon"><img src={`/results/${icon}`} alt={`${title} icon`} /></div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  )
}