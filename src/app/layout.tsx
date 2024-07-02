import type { Metadata } from "next";
import './sass/main.scss'
import NavBar from "../components/nav/NavBar";

export const metadata: Metadata = {
  title: "Prueba Técnica",
  description: "",
};

// Creamos el layout principal de la aplicación. Agregamos el Navbar.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>        
        <NavBar />
        {children}
      </body>
    </html>
  );
}
