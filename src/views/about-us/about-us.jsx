import SectionsHeader from "../../components/sections-header/sections-header";
import "./about-us.css";
import Card from "./components/card";
import { aboutFeatures } from "./data/aboutFeatures";

export default function AboutUs() {
  return (
    <div id="about-us">
      <SectionsHeader
        title={
          "Todo lo que tu familia necesita para cuidar con amor a sus mayores."
        }
        phrase={
          "Con herramientas simples y efectivas, BueloApp hace que el cuidado familiar sea más fácil para todos."
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
