import { Link } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import { PROJECT_DETAILS } from "../data/projectDetails";
import Icon from "../components/Icon";

const linkIconName = {
  github: "github",
  live: "globe",
  download: "download",
};

function ProjectCard({ project }) {
  const links = project.links || (project.link ? [project.link] : []);
  const hasDetails = Boolean(PROJECT_DETAILS[project.id]);

  return (
    <article className={`project tone-${project.tone || "indigo"}`}>
      <div className="project-banner">
        <span className="project-tile">
          <Icon name={project.icon} size={24} />
        </span>
      </div>

      <div className="project-body">
        <div className="project-titlerow">
          <h2 className="project-title">{project.title}</h2>
          {project.badge && (
            <span className="badge">
              <i />
              {project.badge}
            </span>
          )}
        </div>

        <ul className="bullets">
          {(project.bullets || []).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <ul className="chips tech">
          {(project.tech || []).map((item) => (
            <li key={item} className="chip mono">
              {item}
            </li>
          ))}
        </ul>

        {(links.length > 0 || hasDetails) && (
          <div className="project-foot">
            {links.length > 0 && (
              <div className="project-links">
                {links.map((link) => (
                  <a
                    key={link.label}
                    className={`project-link ${link.kind === "github" ? "is-source" : "is-demo"}`}
                    href={link.url || undefined}
                    aria-disabled={!link.url}
                    {...(link.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon name={linkIconName[link.kind] || "arrow-up-right"} size={16} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {hasDetails && (
              <Link className="project-learn-btn" to={`/projects/${project.id}`}>
                <span>Learn more about this project</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { data } = usePortfolio();
  const { projects, profile } = data;
  const page = profile.pages.projects;

  return (
    <>
      <h1 className="page-title">{page.title}</h1>
      {page.subtitle && <p className="page-sub">{page.subtitle}</p>}
      {page.note && <p className="page-note">Note: {page.note}</p>}

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
