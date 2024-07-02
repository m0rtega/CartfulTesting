import React from "react";
import NavMenu from "./NavMenu";

// El navbar.
export default function NavBar() {
  
  return (
    <header className="navbar">
      <div className="nav-title">
        The Coffee Shop
      </div>
      <NavMenu />
    </header>
  )
}