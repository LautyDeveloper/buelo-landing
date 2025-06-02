import FAQ from "./components/faq/faq.jsx";
import faqs from "./data/faqs";
import "./faqs.css";

export default function FAQs() {
  return (
    <div id="faqs">
      <div className="faqs-header">
        <h3>Preguntas Frecuentes</h3>
        <p>
          Resolvemos las dudas más comunes sobre BueloApp y cómo puede ayudar a
          tu familia.
        </p>
      </div>
      <div className="faqs-container">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
