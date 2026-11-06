import { usePortfolio } from "../data/PortfolioContext";
import Icon from "../components/Icon";
import { ResumeHead } from "../components/Section";
import resumePdf from "../data/Resume.pdf";

const range = (item) => [item.start, item.end].filter(Boolean).join(" – ");

export default function Resume() {
  const { data } = usePortfolio();
  const { profile, skills, experience, education, achievements, profiles, certifications, por = [] } = data;

  const skillCards = [
    { label: "Programming Languages", items: skills.languages },
    { label: "Core CS Fundamentals", items: skills.fundamentals },
    { label: "Android Development", items: skills.android },
    { label: "Backend Development", items: skills.backend },
    { label: "Web & Tools", items: skills.webTools || skills.tools },
    { label: "Technologies", items: !skills.android && !skills.backend ? skills.technologies : null },
    { label: "Tools", items: !skills.webTools ? skills.tools : null },
  ].filter((card) => card.items && card.items.length > 0);

  return (
    <article className="resume">
      <header className="resume-head">
        <div>
          <h1 className="resume-name">{profile.name}</h1>
          <p className="resume-sub">
            {profile.role} • {profile.location}
          </p>
        </div>
        <div className="resume-actions no-print">
          <a
            className="btn btn-primary btn-md"
            href={resumePdf}
            download="Sujal_Agrawal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="download" size={17} /> Download Resume
          </a>
        </div>
      </header>

      <section className="res-section">
        <ResumeHead icon="layers">Technical Skills</ResumeHead>
        <div className="skill-cards">
          {skillCards.map((card) => (
            <div key={card.label} className="card skill-card">
              <h3 className="skill-card-label">{card.label}:</h3>
              <ul className="chips commas">
                {card.items.map((item) => (
                  <li key={item} className="chip mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {experience.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="briefcase">{profile.pages?.resume?.experience || "Work Experience"}</ResumeHead>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.id} className="tl-item">
                <span className="tl-mark" aria-hidden="true" />
                <div className="tl-head">
                  <h3>{job.role}</h3>
                  <span className="date-pill mono">{range(job)}</span>
                </div>
                <p className="tl-sub">
                  <strong>{job.company}</strong>
                  {job.location && (
                    <>
                      {" "}
                      · <span className="muted">{job.location}</span>
                    </>
                  )}
                </p>
                <ul className="bullets">
                  {(job.bullets || []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      )}

      {education.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="graduation">Education</ResumeHead>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.id} className="tl-item">
                <span className="tl-mark" aria-hidden="true" />
                <div className="tl-head">
                  <h3>{item.school}</h3>
                  <span className="date-pill mono">{range(item)}</span>
                </div>
                <p className="tl-sub tl-sub-tight">{item.degree}</p>
                <p className="muted">
                  {[item.grade, item.location].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {achievements.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="trophy">Achievements</ResumeHead>
          <div className="ach-grid">
            {achievements.map((item) => (
              <div key={item.id} className="card ach-card">
                <h3 className="ach-title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {profiles.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="code">Coding Profiles</ResumeHead>
          <ul className="certs">
            {profiles.map((item) => (
              <li key={item.id}>
                <a
                  className="card cert cert-link"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.platform} profile (opens in a new tab)`}
                >
                  <Icon name={item.icon || "code"} size={18} />
                  <div>
                    <p className="cert-title">{item.platform}</p>
                    <p className="cert-issuer mono">
                      {item.rating}
                      {item.username ? ` · ${item.username}` : ""}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {por.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="user">Positions of Responsibility</ResumeHead>
          <ol className="timeline">
            {por.map((item) => (
              <li key={item.id} className="tl-item">
                <span className="tl-mark" aria-hidden="true" />
                <div className="tl-head">
                  <h3>{item.role}</h3>
                  <span className="date-pill mono">{range(item)}</span>
                </div>
                <p className="tl-sub">
                  <strong>{item.company}</strong>
                  {item.location && (
                    <>
                      {" "}
                      · <span className="muted">{item.location}</span>
                    </>
                  )}
                </p>
                <ul className="bullets">
                  {(item.bullets || []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="res-section">
          <ResumeHead icon="award">Certifications</ResumeHead>
          <ul className="certs">
            {certifications.map((item) => (
              <li key={item.id}>
                <div className="card cert">
                  <Icon name="file" size={18} />
                  <div>
                    <p className="cert-title">{item.title}</p>
                    <p className="cert-issuer mono">— {item.issuer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
