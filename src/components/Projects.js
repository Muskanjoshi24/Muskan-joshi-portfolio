import "./Projects.css";

const projectList = [
  {
    name: "The Fashion Trends website | April 2025-May 2025 ",
    tech: "HTML, CSS, JavaScript, Bootstrap ",
    desc: "Fashion Trends is an online platform that displays a variety of clothing and accessories, offering smooth navigation, product collections, wishlist, and shopping cart features for a user-friendly experience.",
    github: "https://muskanjoshi24.github.io/-90667-HTML5-and-CSS3-Fundamentals/"
  },
  {
    name: "Shiftwave Shipping | Dec 2023-April 2024",
    tech: "MERN Stack",
    desc: "A full-stack shipping auction platform with real-time bidding, admin dashboard, and role-based access.",
    github: "https://github.com/Muskanjoshi24/Shiftwave-Shipping-"
  },
  {
    name: "Product Landing Page | Nov 2023-Dec 2023",
    tech: "HTML, CSS & Javascript",
    desc: "Safari Backpacks Landing Page This repository contains the HTML, CSS & Javascript code for a responsive landing page promoting Safari backpacks.",
    github: "https://muskanjoshi24.github.io/productlandingpage/"
  },
  {
    name: "Elearning Platform | Nov 2023-Dec 2023",
    tech: "HTML, CSS & Javascript",
    desc: "This e-learning website is crafted using HTML, CSS, Bootstrap, and JavaScript, offering a modern and interactive platform for online education.",
    github: "https://github.com/Muskanjoshi24/Elearning"
  },
  {
    name: "Pet Food & Accessories System | Feb 2023- June 2023",
    tech: "PHP, MySQL, JavaScript",
    desc: "An e-commerce system to order pet food and products, complete with product search, cart, and login.",
    github: "https://github.com/Muskanjoshi24/PetFood"
  },
  {
    name: "Explore Indore City | Jan 2023-Feb 2023",
    tech: "HTML, CSS, JavaScript",
    desc: "A local city guide for Indore showcasing tourist spots, hotels, restaurants, and emergency contacts.",
    github: "https://muskanjoshi24.github.io/Explore-Indore/index.html"
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p className="tech"><strong>Tech:</strong> {project.tech}</p>
            <p>{project.desc}</p>
            <a href={project.github} target="_blank" rel="noreferrer" className="github-btn">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

