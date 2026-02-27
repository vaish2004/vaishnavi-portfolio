import { EXPERIENCE } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience alt-section">
      <div className="section-wrapper">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Professional Experience</h2>

        <div className="experience__list">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="card experience__card">
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{exp.role}</h3>
                  <p className="experience__company">{exp.company}</p>
                </div>
                <span className="experience__period">{exp.period}</span>
              </div>

              <p className="experience__desc">{exp.desc}</p>

              <div className="tags-row">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
