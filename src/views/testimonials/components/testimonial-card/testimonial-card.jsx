import "./testimonial-card.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card" key={testimonial.id}>
      <div className="testimonial-header">
        <div className="emoji-container">
          <strong>{testimonial.emoji}</strong>
        </div>
        <div className="nombre-container">
          <strong>{testimonial.nombre}</strong>
          <p>{testimonial.rol}</p>
        </div>
      </div>
      <div className="text-container">
        <p>{testimonial.texto}</p>
      </div>
    </div>
  );
}
