import "./separator.css";
import SectionsHeader from "../../components/sections-header/sections-header";
export default function Separator() {
  return (
    <div className="separator">
      <SectionsHeader
        title={"Un mejor cuidado empieza con un clic"}
        phrase={
          "Probá BueloApp gratis y empezá a acompañar mejor a quienes más lo necesitan."
        }
        titleColor={"var(--primaryFontColor)"}
      />

      <div className="separator-buttons-container">
        <button>Empezar a cuidar mejor</button>
        <button>Consultar dudas</button>
      </div>
    </div>
  );
}
