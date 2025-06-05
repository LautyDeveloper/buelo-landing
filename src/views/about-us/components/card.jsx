import { useState } from "react";
import "./card.css";

export default function Card({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="about-us-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: isHovered ? `1px solid ${data.color}` : "2px solid transparent",
        boxShadow: isHovered
          ? `0 4px 12px ${data.color}40` // 40 = 25% opacidad
          : "none",
        transition: "all 0.3s ease",
      }}
    >
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
