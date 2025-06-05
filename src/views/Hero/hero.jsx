import Header from "./components/header/header";
import "./hero.css";

export default function Hero() {
  return (
    <div className="container">
      <Header />
      <div className="hero-container" id="inicio">
        <div className="hero-information">
          <div className="information-text">
            <h1>El bienestar de tus abuelos, en manos de toda la familia</h1>
            <p>
              Cuidar a quienes más amás no debe ser complicado. Con BueloApp, la
              familia puede organizarse fácil para acompañar a las personas
              mayores con cariño y coordinación.
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
