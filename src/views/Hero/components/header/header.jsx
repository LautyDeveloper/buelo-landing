import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <p>🤶</p>
        <p>BueloApp</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>

          <li>
            <a href="">Funcionalidades</a>
          </li>

          <li>
            <a href="">Testimonios</a>
          </li>

          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="header-buttons-container">
        <button>Iniciar Sesion</button>
        <button>Registrate</button>
      </div>
    </header>
  );
}
