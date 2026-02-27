import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact__alt-section">
      <div className="section-wrapper contact__wrapper">
        <p className="section-label">Let's Work Together</p>
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact__desc">
          Open to roles where I can lead backend teams, make architecture
          decisions, and bring AI into the product.
        </p>

        <div className="contact__status">
          <span className="contact__status-dot" />
          Open for New Opportunities
        </div>

        <div className="contact__actions">
          <a href="mailto:your@email.com" className="btn-primary">
            Send an Email
          </a>
          <a
            href="https://github.com/vaish2004"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{border:"1px solid white"}}
          >
            GitHub 
          </a>
        </div>
      </div>
    </section>
  );
}
