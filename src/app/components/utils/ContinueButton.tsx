import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

export default function ContinueButton({href} : Props) {

  return (
    <Link className="continue-button" href={href}>
      Continue
    </Link>    
  )
}