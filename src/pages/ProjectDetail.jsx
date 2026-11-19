import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECT_DETAILS } from "../data/projectDetails";
import Icon from "../components/Icon";

function SectionTitle({ icon, title }) {
  return (
    <div className="res-head">
      <span className="res-tile">
        <Icon name={icon} size={18} />
      </span>
      <h2>{title}</h2>
    </div>
  );
}

function ActionLinks({ detail }) {
  return (
    <div className="pd-actions">
      {detail.liveUrl && (
        <a
          className="btn btn-primary btn-md"
          href={detail.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="globe" size={17} />
          <span>Live Website</span>
          <Icon name="arrow-up-right" size={16} />
        </a>
      )}
      {detail.sourceUrl && (
        <a
          className="btn btn-dark btn-md"
          href={detail.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size={17} />
          <span>Source Code</span>
        </a>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const detail = PROJECT_DETAILS[projectId];

  if (!detail) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pd-page">
      <Link className="pd-back no-print" to="/projects">
        <Icon name="arrow-left" size={16} />
        <span>Back to Projects</span>
      </Link>

      <header className={`card pd-hero tone-${detail.tone || "indigo"}`}>
        <div className="pd-hero-banner">
          <span className="pd-hero-tile">
            <Icon name={detail.icon} size={28} />
          </span>
          <span className="pd-timeframe mono">{detail.timeframe}</span>
        </div>

        <div className="pd-hero-body">
          <h1 className="pd-title">{detail.title}</h1>
          <p className="pd-tagline">{detail.tagline}</p>
          <ActionLinks detail={detail} />
          <p className="pd-summary">{detail.summary}</p>
        </div>
      </header>

      <section className="pd-metrics" aria-label="Key highlights">
        {detail.metrics.map((metric) => (
          <div key={metric.label} className="card pd-metric-card">
            <div className="pd-metric-value mono">{metric.value}</div>
            <div className="pd-metric-label">{metric.label}</div>
          </div>
        ))}
      </section>

      <section className="res-section">
        <SectionTitle icon="layers" title="Core Capabilities" />
        <div className="pd-grid-2">
          {detail.features.map((feature) => (
            <article key={feature.title} className="card pd-card">
              <h3 className="pd-card-title">{feature.title}</h3>
              <p className="pd-card-text">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="res-section">
        <SectionTitle icon="server" title="System Architecture" />
        <div className="pd-arch-list">
          {detail.architecture.map((layer) => (
            <article key={layer.layer} className="card pd-card">
              <div className="pd-arch-head">
                <h3 className="pd-card-title">{layer.layer}</h3>
                <span className="pd-arch-stack mono">{layer.stack}</span>
              </div>
              <p className="pd-card-text">{layer.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="res-section">
        <SectionTitle icon="cpu" title="Engineering Deep Dive" />
        <div className="pd-eng-list">
          {detail.engineering.map((topic) => (
            <article key={topic.title} className="card pd-card">
              <h3 className="pd-card-title">{topic.title}</h3>
              <ul className="bullets pd-eng-bullets">
                {topic.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="res-section">
        <SectionTitle icon="terminal" title="API & Module Surface" />
        <div className="pd-grid-2">
          {detail.apis.map((group) => (
            <article key={group.group} className="card pd-card">
              <h3 className="pd-card-title">{group.group}</h3>
              <ul className="bullets pd-endpoint-list">
                {group.endpoints.map((endpoint) => (
                  <li key={endpoint} className="mono">
                    {endpoint}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="res-section">
        <SectionTitle icon="code" title="Complete Tech Stack" />
        <div className="skill-cards">
          {detail.techGroups.map((group) => (
            <div key={group.category} className="card skill-card">
              <div className="skill-card-label">{group.category}</div>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="card pd-footer no-print">
        <div>
          <h2 className="pd-footer-title">Explore {detail.title}</h2>
          <p className="pd-card-text">
            Try the deployed application or inspect the full codebase on GitHub.
          </p>
        </div>
        <div className="pd-footer-actions">
          <ActionLinks detail={detail} />
          <Link className="btn btn-text" to="/projects">
            <Icon name="arrow-left" size={16} />
            <span>All Projects</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
