import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

// El botón de continuar que se usa en la primera y segunda pantalla.
export default function ContinueButton({href} : Props) {

  return (
    <Link className="continue-button" href={href}>
      Continue
    </Link>    
  )
}