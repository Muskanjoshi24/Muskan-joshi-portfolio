import resume from "../assets/Muskanjoshi_Resume.pdf"; // Make sure your PDF file is in /assets/
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">My Resume</h2>
      <p className="resume-desc">
        You can view or download my resume below to know more about my work and technical background.
      </p>
      <a href={resume} target="_blank" rel="noreferrer" className="resume-btn">
        View Resume
      </a>
    </section>
  );
};

export default Resume;

