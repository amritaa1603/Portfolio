import "./Projects.css";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Chemical Equipment Parameter Visualizer",
     
    description:
      "A hybrid analytics platform integrating React (web) and PyQtS (desktop) with real-time data sync, Chart.js visualizations and PDF report generation.",
    points: [
      "Built a hybrid analytics platform using Django REST API, integrating React (web) and PyQtS (desktop)",
      "Implemented data processing and analysis using Pandas",
      "Enabled real-time data synchronization across platforms",
      "Developed interactive visualizations using Chart.js and Matplotlib",
      "Added CSV parsing, dataset history tracking, and PDF report generation",
    ],
    tech: [
      "Django REST",
      "React",
      "PyQtS",
      "Pandas",
      "Chart.js",
      "Matplotlib",
    ],
    live: "",
    github: "https://github.com/amritaa1603/chemical_visualizer-Web-desktop-application",
  },

  {
    id: 2,
    title: "EV Vehicle & Charging Demand Prediction",
    description:
      "A machine learning model built with Scikit-learn, Pandas and NumPy trained and evaluated on Google Colab to predict EV charging demand.",
    points: [
      "Developed a machine learning model to predict EV charging demand",
      "Performed data preprocessing and analysis using Pandas and NumPy",
      "Implemented predictive models using Scikit-learn",
      "Trained and evaluated models on Google Colab environment",
      "Improved prediction accuracy through data cleaning and feature selection",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Google Colab",
    ],
    live: "https://ev-prediction-model.streamlit.app/#prediction-summary",
    github: "https://github.com/amritaa1603/EV-prediction-model",
  },

  {
    id: 3,
    title: "Multi-Layer Cloud Security Simulator",
    description:
      "Full-stack cloud security simulator using Django REST API and React Vite with JWT auth, RBAC, firewall filtering and an interactive monitoring dashboard.",
    points: [
      "Built a full-stack cloud security simulator using Django REST API and React + Vite",
      "Implemented JWT authentication and Role-Based Access Control (RBAC)",
      "Developed firewall filtering and attack detection modules",
      "Created an interactive dashboard for monitoring security logs",
      "Demonstrated layered security concepts across cloud environments",
    ],
    tech: ["Django REST", "React", "JWT", "RBAC", "Vite"],
    live: "https://multi-layer-cloud-security-simulator-5ap6z40kr.vercel.app/",
    github: "https://github.com/amritaa1603/Multi-Layer-Cloud-Security-Simulator",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <div className="hero-content">

          

          <h1 className="hero-heading">
            Things I've <span>Built</span>
          </h1>

          <p className="hero-sub">
            I'm a Computer Science Engineering student passionate about
            building real-world applications — from ML models to
            full-stack platforms.
          </p>

          <div className="hero-stats">

            <div className="stat">
              <h3>3+</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="projects-container">

          <p className="projects-eyebrow">✦ what i've built</p>

          <h2 className="projects-heading">My Projects</h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <div
                key={project.id}
                className={`project-card ${
                  hovered === project.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >

                <div className="card-accent"></div>

                <div className="card-body">

                  <span className="card-number">
                    0{project.id}
                  </span>

                  <h3 className="card-title">
                    {project.title}
                  </h3>

                  <p className="card-desc">
                    {project.description}
                  </p>

                  <ul className="card-points">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="card-tags">
                    {project.tech.map((t, i) => (
                      <span key={i} className="card-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}

                  <div className="card-actions">

                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-live ${
                        !project.live ? "disabled" : ""
                      }`}
                    >
                      <span className="live-dot"></span>
                      Live
                    </a>

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-github ${
                        !project.github ? "disabled" : ""
                      }`}
                    >
                      GitHub
                    </a>

                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;