import "./Skills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS",
  "MongoDB", "MySQL", "C", "C++","Manual Testing", "Postman", "JMeter", "SonarQube", "Bootstrap", "PowerBI","Git & GitHub", "MS Word & MS Excel"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-pill">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

