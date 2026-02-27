import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Open for New Opportunities
        </div>

        <h1 className="hero__title">
        Vaishnavi Waghmare
          <span className="hero__title-accent">Full Stack Developer</span>
        </h1>

        <p className="hero__desc">
          Building scalable backend systems with Java &amp; Spring Boot. Leading
          teams, making architecture decisions, and integrating AI into products.
        </p>

        <div className="hero__actions">
         
          <a
            href="https://github.com/vaish2004"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{color:"white", border:"1px slod gray", borderRadius:"8px 12px"}}
          >
            GitHub 
          </a>
        </div>
      </div>
    </section>
  );
}
