import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-item">
        <h3>Junior QA – Zehntech</h3>
        <p className="exp-date">Oct 2024 – Apr 2025</p>
        <p>
• Created and executed comprehensive test cases for web applications.<br/>
• Performed API testing using Postman and JMeter for functionality and performance validation.<br/>
• Used Zap and SonarQube to identify vulnerabilities and improve code quality.<br/>
• Reported bugs clearly with screenshots and steps to reproduce, ensuring quick fixes.<br/>
• Collaborated with developers and project managers to improve release quality.
</p>

      </div>

      <div className="experience-item">
        <h3>Software Developer Trainee – Ypsilon IT</h3>
        <p className="exp-date">Jul 2023 – Jan 2024</p>
        <p>
• Completed full-stack training and implemented hands-on projects using the MERN stack.<br/>
• Built responsive websites and dynamic UIs with ReactJS, HTML, CSS, JavaScript, jQuery, and Bootstrap.<br/>
• Developed REST APIs and connected backend services to MongoDB in the Shiftwave Shipping project.<br/>
• Gained experience in real-time frontend-backend integration and version control using GitHub.
</p>

      </div>

      <div className="experience-item">
        <h3>Web Development Intern – Sync’s Intern</h3>
        <p className="exp-date">Nov 2023 – Dec 2023</p>
       <p>
• Built responsive web pages using HTML, CSS, and JavaScript.<br/>
• Created a quiz app and e-learning platform as part of task-based assignments.<br/>
• Implemented UI design with Bootstrap and responsive media queries.<br/>
• Delivered clean, well-commented code and met tight weekly deadlines.
</p>

      </div>
    </section>
  );
};

export default Experience;
