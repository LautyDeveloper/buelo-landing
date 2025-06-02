import "./footer.css";
import BueloLogo from "../../components/buelo-logo/buelo-logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="main-footer">
          <BueloLogo />

          <p>
            Plataforma para coordinar el cuidado de personas mayores en familia.
          </p>
        </div>
        <div className="list-container">
          <strong>Plataforma</strong>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Funcionalidades</a>
            </li>
            <li>
              <a href="">Precios</a>
            </li>
            <li>
              <a href="">Testimonios</a>
            </li>
          </ul>
        </div>
        <div className="list-container">
          <strong>Recursos</strong>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Guia</a>
            </li>
            <li>
              <a href="">Soporte</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="list-container">
          <strong>Legal</strong>
          <ul>
            <li>
              <a href="">Terminos</a>
            </li>
            <li>
              <a href="">Privacidad</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="aside-footer">
        <p>© 2023 BueloApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
