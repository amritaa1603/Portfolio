import "./About.css";
import React, { useState, useRef, useEffect } from "react";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid5 from "../assets/grid5.png";
import grid3 from "../assets/grid3.png";

const About = () => {
  const [activeGrid, setActiveGrid] = useState(null);
  const techRef = useRef(null);

  useEffect(() => {
    const container = techRef.current;
    if (!container) return;

    const capsules = container.querySelectorAll(".skill-capsule");

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      capsules.forEach((capsule) => {
        const capRect = capsule.getBoundingClientRect();
        const capX = capRect.left + capRect.width / 2 - rect.left;
        const capY = capRect.top + capRect.height / 2 - rect.top;

        const dx = capX - mouseX;
        const dy = capY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;

        const strength = 100;
        const moveX = (dx / distance) * strength;
        const moveY = (dy / distance) * strength;

        capsule.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const resetCapsules = () => {
      capsules.forEach((capsule) => {
        capsule.style.transform = "translate(0, 0)";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetCapsules);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetCapsules);
    };
  }, []);

  return (
    <section className="section-spacing" id="about">
      <div className="c-space">
        <div
          className={`grid-overlay ${activeGrid ? "active" : ""}`}
          onClick={() => setActiveGrid(null)}
        ></div>

        <div className="about-grid">

          {/* ================= GRID 1 — EDUCATION ================= */}
          <div
            className={`grid-item grid-1 ${activeGrid === 1 ? "active" : ""}`}
            onClick={() => setActiveGrid(1)}
          >
            <div className="grid-container grid-default-color">
              <img src={grid1} alt="background_grid1" className="grid1-bg" />
              {activeGrid === 1 ? (
                <div className="edu-expanded">
                  <h2>Education</h2>
                  <p>
                    I am currently pursuing my undergraduate degree in
                    Engineering, where I am building a strong foundation in
                    programming, software development, and problem-solving.
                  </p>
                  <p>
                    My academic journey has helped me understand core technical
                    concepts while also encouraging independent learning and
                    project-based exploration.
                  </p>
                  <p>
                    Alongside coursework, I actively work on improving my
                    frontend development skills and creating interactive user
                    experiences.
                  </p>
                </div>
              ) : (
                <>
                  <div className="dark-overlay"></div>
                  <div className="edu-overlay-content">
                    <h3>Education</h3>
                    <p>Academic journey & learning foundation</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ================= GRID 2 — TECHNICAL SKILLS ================= */}
          <div
            className={`grid-item grid-2 ${activeGrid === 2 ? "active" : ""}`}
            onClick={() => setActiveGrid(2)}
          >
            <div className="grid-container grid-default-color tech-cover" ref={techRef}>
              <img src={grid2} alt="background_grid2" className="grid1-bg" />
              {activeGrid === 2 ? (
                <>
                  <h2>Technical Skills</h2>
                  <h4>Languages</h4>
                  <div className="tags">
                    <span>Java</span>
                    <span>C++</span>
                    <span>JavaScript</span>
                    <span>SQL</span>
                  </div>
                  <h4>Frontend</h4>
                  <div className="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>React.js</span>
                    <span>Chart.js</span>
                  </div>
                  <h4>Backend & Database</h4>
                  <div className="tags">
                    <span>Django REST</span>
                    <span>REST APIs</span>
                    <span>MySQL</span>
                  </div>
                  <h4>Tools</h4>
                  <div className="tags">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Google Colab</span>
                  </div>
                  <h4>Libraries</h4>
                  <div className="tags">
                    <span>Pandas</span>
                    <span>NumPy</span>
                    <span>Scikit-learn</span>
                    <span>JWT</span>
                  </div>
                </>
              ) : (
                <div className="capsule-area">
                  {["JavaScript", "React", "Python", "Git", "Figma", "Java", "Skills", "CSS"].map((skill, i) => (
                    <span key={i} className="skill-capsule">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ================= GRID 3 — BEYOND CODING ================= */}
          <div
            className={`grid-item grid-3 ${activeGrid === 3 ? "active" : ""}`}
            onClick={() => setActiveGrid(3)}
          >
            <div className="grid-container grid-special-color">
              <img src={grid3} alt="work_bg" className="grid1-bg" />
              {activeGrid === 3 ? (
                <>
                  <h2>Soft Skills</h2>
                  <p style={{ color: "white" }}>
                    I believe strong communication and collaboration are as
                    important as technical skills. I enjoy working in teams and
                    contributing ideas while being open to feedback.
                  </p>
                  <p style={{ color: "white" }}>
                    I am adaptable, detail-oriented, and a quick learner, which
                    helps me adjust to new challenges and environments efficiently.
                  </p>
                </>
              ) : (
                <>
                  <div className="dark-overlay"></div>
                  <div className="soft-overlay-content">
                    <h3>Beyond Coding</h3>
                    <p>Creative Builder & Creative Developer</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ================= GRID 4 — CTA ================= */}
        <div
  className={`grid-item grid-purple-bg grid-4`}
  onClick={(e) => e.stopPropagation()}
>
  <div
    className="grid-container"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1rem", fontSize: "0.95rem", lineHeight: "1.5" }}>
      Do you want to start a project together?
    </p>
    <button
      style={{
        padding: "10px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.1)",
        color: "white",
        cursor: "pointer",
        backdropFilter: "blur(6px)",
        fontSize: "0.9rem",
        fontWeight: "600",
        letterSpacing: "0.5px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText("amritajdhv16033@gmail.com");
        e.target.innerText = "Copied!";
        setTimeout(() => (e.target.innerText = "Copy Email Address"), 2000);
      }}
      onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.22)"}
      onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.1)"}
    >
      Copy Email Address
    </button>
  </div>
</div>
          {/* ================= GRID 5 — CURRENTLY WORKING ON ================= */}
          <div
            className={`grid-item grid-5 ${activeGrid === 5 ? "active" : ""}`}
            onClick={() => setActiveGrid(5)}
          >
            <div className="grid-container grid-default-color">
              <img src={grid5} alt="work_bg" className="grid1-bg" />
              {activeGrid === 5 ? (
                <>
                  <h2 style={{ color: "white" }}>Currently Working On</h2>
                  <h4>Chemical Equipment Parameter Visualizer</h4>
                  <p style={{ color: "white" }}>
                    A hybrid analytics platform using Django REST API, React (web) and PyQtS (desktop) with real-time data sync, Chart.js visualizations and PDF report generation.
                  </p>
                  <h4>EV Vehicle & Charging Demand Prediction</h4>
                  <p style={{ color: "white" }}>
                    A machine learning model built with Scikit-learn, Pandas and NumPy trained and evaluated on Google Colab to predict EV charging demand.
                  </p>
                  <h4>Multi-Layer Cloud Security Simulator</h4>
                  <p style={{ color: "white" }}>
                    Full-stack security simulator using Django REST API and React Vite with JWT auth, RBAC, firewall filtering and an interactive monitoring dashboard.
                  </p>
                </>
              ) : (
                <>
                  <div className="dark-overlay"></div>
                  <div className="work-overlay-content">
                    <h3>Currently Working On</h3>
                    <p>Projects & open source exploration</p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;