import "./card.css";

export default function Card({ data }) {
  return (
    <div className="about-us-card">
      <div className="card-icon-container">{data.icon}</div>
      <strong>{data.title}</strong>
      <p>{data.text}</p>
    </div>
  );
}
