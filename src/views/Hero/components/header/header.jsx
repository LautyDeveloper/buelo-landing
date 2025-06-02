import { useState } from "react";
import "./header.css";
import BueloLogo from "../../../../components/buelo-logo/buelo-logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header>
        <BueloLogo />

        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? "❌" : "☰"}
        </button>

        <div className={`nav-container ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="#inicio" onClick={closeMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#funcionalidades" onClick={closeMenu}>
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#testimonios" onClick={closeMenu}>
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={closeMenu}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-buttons-container">
            <button>Iniciar Sesión</button>
            <button>Registrate</button>
          </div>
        </div>
      </header>

      {/* Overlay oscuro */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}
