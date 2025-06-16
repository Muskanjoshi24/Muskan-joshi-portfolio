import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        If you'd like to connect, discuss an opportunity, or just say hello —
        feel free to reach out!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> muskanjoshi247@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/muskan-joshi24"
            target="_blank"
            rel="noreferrer"
          >
            muskan-joshi24
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

