import "./testimonials.css";
import testimonialsData from "./data/testimonialsData";
import TestimonialCard from "./components/testimonial-card/testimonial-card";
import SectionsHeader from "../../components/sections-header/sections-header";

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
