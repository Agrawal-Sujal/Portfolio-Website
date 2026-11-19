import Icon from "./Icon";

// Tile + heading used on the resume page.
export function ResumeHead({ icon, children }) {
  return (
    <div className="res-head">
      <span className="res-tile">
        <Icon name={icon} size={19} />
      </span>
      <h2>{children}</h2>
    </div>
  );
}
