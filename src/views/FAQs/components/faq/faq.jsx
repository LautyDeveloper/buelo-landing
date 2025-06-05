import { useState } from "react";
import "./faq.css";

export default function FAQ({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        {faq.question}
        <span className="faq-icon">{open ? "▲" : "▼"}</span>
      </div>
      {open && <p className="faq-answer">{faq.answer}</p>}
    </div>
  );
}
