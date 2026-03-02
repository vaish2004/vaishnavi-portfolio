import { ARCH_CARDS } from "../../data/portfolioData";
import "./Architecture.css";

export default function Architecture() {
  return (
    <section id="architecture" className="architecture">
      <div className="section-wrapper">
        <p className="section-label">How I Build Systems</p>
        <h2 className="section-title">Architecture Philosophy</h2>

        <div className="architecture__grid">
          {ARCH_CARDS.map((item) => (
            <div key={item.title} className="card architecture__card">
              <span className="architecture__accent-bar" />
               {/* aria-hidden="true" */}
              <div className="architecture__body">
                <h4 className="architecture__title">{item.title}</h4>
                <p className="architecture__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
