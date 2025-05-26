import Header from "./components/header/header";
import "./hero.css";

export default function Hero() {
  return (
    <div className="container">
      <Header />
      <div className="hero-container">
        <div className="hero-information">
          <div className="information-text">
            <h1>Cuidado Familiar coordinado para tus seres queridos</h1>
            <p>
              BueloApp te ayuda a organizar el cuidado de tus familiares mayores
              con herramientas simples y efectivas para toda la familia.
            </p>
          </div>
          <div className="information-buttons">
            <button>Probar Ahora</button>
            <button>Ver Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
