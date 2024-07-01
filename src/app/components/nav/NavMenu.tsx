import React from "react";

export default function NavMenu() {

  return (
    <div className="nav-menu">
      {[...Array(3)].map((_, i) => 
        <div className="menu-line" key={i}></div>
      )}
    </div>    
  )
}