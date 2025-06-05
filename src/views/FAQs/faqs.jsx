import FAQ from "./components/faq/faq.jsx";
import faqs from "./data/faqs";
import "./faqs.css";
import SectionsHeader from "../../components/sections-header/sections-header.jsx";
export default function FAQs() {
  return (
    <div id="faqs">
      <SectionsHeader
        title={"¿Tenés dudas?"}
        phrase={
          "Respondemos lo más preguntado sobre BueloApp y cómo puede ayudarte a vos y tu familia."
        }
        titleColor={"var(--destacatedText)"}
      />
      <div className="faqs-container">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
