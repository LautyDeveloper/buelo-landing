import SectionsHeader from "../../components/sections-header/sections-header";
import "./about-us.css";
import Card from "./components/card";
import { aboutFeatures } from "./data/aboutFeatures";

export default function AboutUs() {
  return (
    <div id="about-us">
      <SectionsHeader
        title={"Todo lo que necesitas para cuidar a tus seres queridos."}
        phrase={
          "BueloApp ofrece herramientas simples pero poderosas para coordinar el cuidado familiar."
        }
        titleColor={"var(-- destacatedText)"}
      />
      <div className="about-us-cards-container">
        {aboutFeatures.map((feature, index) => {
          return <Card key={index} data={feature} />;
        })}
      </div>
    </div>
  );
}
