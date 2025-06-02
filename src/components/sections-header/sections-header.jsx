import "./sections-header.css";

export default function SectionsHeader({ title, phrase, titleColor }) {
  return (
    <div className="sections-header">
      <h2 style={{ color: titleColor }}>{title}</h2>
      <p>{phrase}</p>
    </div>
  );
}
