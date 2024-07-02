import ContinueButton from "../components/utils/ContinueButton";

// La primera página de nuestra simple app. No hay mucho que ver.
export default function Home() {

  return (
    <main>
      <div className="barista">
        <div className="icon">
          <img 
            src="/barista-transition/pretty-much-a-barista-desktop.svg" 
            alt="pretty-much-a-barista-desktop" 
          />
        </div>
        <div className="text">We’ll find coffee that’s on your level.</div>
        <ContinueButton href="/q2" />
      </div>
    </main>
  );
}
