'use client'

import React from "react";

// El menú de hamburguesa del navbar.
export default function NavMenu() {

  // Creamos las 3 líneas del menú de hamburguesa. Hacemos esto en vez de usar un ícono para apegarnos
  // a las medidas del figma
  const lines = [...Array(3)].map((_, i) => <div className="menu-line" key={i}></div>)

  return (
    <div className="nav-menu">
      {lines}
    </div>    
  )
}