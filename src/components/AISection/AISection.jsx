import { AI_CARDS } from "../../data/portfolioData";
import "./AISection.css";


export default function AISection() {
  return (
    <section id="ai" className="ai-section alt-section">
      <div className="section-wrapper">
        <p className="section-label">AI &amp; Intelligent Systems</p>
        <h2 className="section-title">AI Experience</h2>

        <div className="ai-section__grid">
          {AI_CARDS.map((card) => (
            <div key={card.title} className="card ai-section__card">
              <div className="ai-section__card-top">
                <span className="ai-section__icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="ai-section__title">{card.title}</h3>
              </div>
              <p className="ai-section__desc">{card.desc}</p>
              <div className="tags-row ai-section__tags">
                {card.tags.map((tag) => (
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
