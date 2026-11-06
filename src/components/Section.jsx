import Icon from "./Icon";

// Small mono label with a rule running out to the right (home page sections).
export function SectionLabel({ icon, children }) {
  return (
    <h2 className="section-label">
      {icon && <Icon name={icon} size={14} />}
      {children}
    </h2>
  );
}

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
