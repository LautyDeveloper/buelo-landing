import "./separator.css";
import SectionsHeader from "../../components/sections-header/sections-header";
export default function Separator() {
  return (
    <div className="separator">
      <SectionsHeader
        title={"Comienza a cuidar mejor a tus seres queridos"}
        phrase={
          "Regístrate gratis y descubre cómo BueloApp puede ayudar a tu familia."
        }
        titleColor={"var(--primaryFontColor)"}
      />

      <div className="separator-buttons-container">
        <button>Crear Cuenta Gratis</button>
        <button>Contactar Soporte</button>
      </div>
    </div>
  );
}
