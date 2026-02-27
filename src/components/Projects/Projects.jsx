import {PROJECTS} from "../../data/portfolioData";
import "./Projects.css";



export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-wrapper">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Key Projects</h2>

        <div className="projects__list">
          {PROJECTS.map((project, index) => (
            <div key={project.name} className="card projects__card">

              <div className="projects__card-header">
                <div className="projects__card-header-text">
                  <h3 className="projects__name">{project.name}</h3>
                  <p className="projects__role">{project.role}</p>
                </div>
                <span className="projects__index">0{index + 1}</span>
              </div>

              <div className="projects__divider" />

              <div className="projects__body">
                <div className="projects__block">
                  <span className="projects__block-label">The Challenge</span>
                  <p className="projects__block-text">{project.challenge}</p>
                </div>
                <div className="projects__block">
                  <span className="projects__block-label">What I Built</span>
                  <p className="projects__block-text">{project.built}</p>
                </div>
              </div>

              <div className="projects__stats">
                {project.stats.map(([num, label]) => (
                  <div key={label} className="projects__stat-box">
                    <span className="projects__stat-num">{num}</span>
                    <span className="projects__stat-label">{label}</span>
                  </div>
                ))}
              </div>

              <div className="tags-row projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
