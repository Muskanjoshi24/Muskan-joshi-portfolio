import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <footer style={{ textAlign: "center", padding: "20px", background: "#f1f1f1" }}>
        <p>© 2025 Muskan Joshi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
