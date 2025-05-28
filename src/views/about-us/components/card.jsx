import "./card.css";

export default function Card({ data }) {
  return (
    <div className="about-us-card">
      <div
        className="card-icon-container"
        style={{ backgroundColor: data.bgColor }}
      >
        {data.icon}
      </div>
      <strong style={{ color: data.color }}>{data.title}</strong>
      <p>{data.text}</p>
    </div>
  );
}
