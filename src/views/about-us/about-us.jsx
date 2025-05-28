import "./about-us.css";
import Card from "./components/card";
import { aboutFeatures } from "./data/aboutFeatures";

export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="about-us-header">
        <h1>Todo lo que necesitas para cuidar a tus seres queridos.</h1>
        <p>
          BueloApp ofrece herramientas simples pero poderosas para coordinar el
          cuidado familiar.
        </p>
      </div>
      <div className="about-us-cards-container">
        {aboutFeatures.map((feature, index) => {
          return <Card key={index} data={feature} />;
        })}
      </div>
    </div>
  );
}
