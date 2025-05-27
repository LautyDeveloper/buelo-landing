import "./testimonials.css";
import testimonialsData from "./data/testimonialsData";
import TestimonialCard from "./components/testimonial-card/testimonial-card";

export default function Testimonials() {
  return (
    <div id="testimonials">
      <div className="testimonials-header">
        <h2>Lo que dicen nuestros Usuarios</h2>
        <p>
          Familias que confían en BueloApp para el cuidado de sus seres
          queridos.
        </p>
      </div>
      <div className="testimonials-cards-container">
        {testimonialsData.map((testimonial, index) => {
          return <TestimonialCard testimonial={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
}
