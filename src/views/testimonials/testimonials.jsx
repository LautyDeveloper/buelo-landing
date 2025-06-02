import "./testimonials.css";
import testimonialsData from "./data/testimonialsData";
import TestimonialCard from "./components/testimonial-card/testimonial-card";
import SectionsHeader from "../../components/sections-header/sections-header";

export default function Testimonials() {
  return (
    <div id="testimonials">
      <SectionsHeader
        title={"Lo que dicen nuestros Usuarios"}
        phrase={
          "Familias que confían en BueloApp para el cuidado de sus seres queridos."
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
