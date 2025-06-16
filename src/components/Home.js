import { Typewriter } from "react-simple-typewriter";
import photo from "../assets/image.png"; // Make sure image is in /assets/
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Hello, I’m <span className="highlight">Muskan 👋</span></h1>
          <h2>
            <Typewriter
              words={['Software Developer', 'Full Stack Developer', 'QA Enthusiast']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="hero-para">
            I love building clean, functional, and creative web apps using MERN stack & testing tools!
          </p>
          <a href="#contact" className="hero-btn">Let’s Connect</a>
        </div>
        <div className="hero-right">
          <img src={photo} alt="Muskan" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;



