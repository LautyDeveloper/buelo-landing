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
        <div className="hero-decoration">
          <div className="circle-1">
            <div className="circle-2">👨‍👩‍👧‍👦</div>

            {/* mini circulitos */}
            <div className="mini-circle calendar">📅</div>
            <div className="mini-circle note">💬</div>
            <div className="mini-circle love">❤️</div>
            <div className="mini-circle medicine">💊</div>
          </div>
        </div>
      </div>
    </div>
  );
}
