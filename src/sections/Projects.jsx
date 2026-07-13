

import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project6 from "../assets/projects/project6.jpg";
import project8 from "../assets/projects/project8.jpg";
import project9 from "../assets/projects/project9.jpg";

const projects = [
  { image: project2, title: "Villa", location: "Chennai", year: "2025" },
  { image: project3, title: "3BHK Flat", location: "Coimbatore", year: "2024" },
  { image: project4, title: "Office Building", location: "Madurai", year: "2025" },
  { image: project6, title: "Modern Residence", location: "Trichy", year: "2024" },
  { image: project8, title: "Apartment Project", location: "Salem", year: "2025" },
  { image: project9, title: "Renovation Project", location: "Erode", year: "2024" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <span>OUR PORTFOLIO</span>
        <h2>Completed Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>

              <span>{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}