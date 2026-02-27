import { SKILLS } from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills" >
      <div className="section-wrapper">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className="skills__grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="card skills__card">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li key={item} className="skills__item">
                    <span className="skills__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
