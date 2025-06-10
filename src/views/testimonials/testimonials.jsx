import "./testimonials.css";
import testimonialsData from "./data/testimonialsData.js";
import TestimonialCard from "./components/testimonial-card/testimonial-card.jsx";
import SectionsHeader from "../../components/sections-header/sections-header.jsx";

export default function Testimonials() {
  return (
    <div id="testimonials">
      <SectionsHeader
        title={"Testimonios de quienes ya usan BueloApp"}
        phrase={
          "Conocé cómo ayudamos a familias reales en el cuidado de sus adultos mayores."
        }
        titleColor={"var(--testimonialTitleColor)"}
      />

      <div className="testimonials-cards-container">
        {testimonialsData.map((testimonial, index) => {
          return <TestimonialCard testimonial={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
}
