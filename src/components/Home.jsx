import "./Home.css";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
             <span>✨</span>
            <span>hey there</span>
          </div>

          
<h1 className="hero-title" style={{ animation: "fadeSlideUp 0.8s ease 0.3s both" }}>
  <ReactTyped
    strings={["I'm <br/> Amrita Jadhav "]}
    
    typeSpeed={50}
    startDelay={300}
    showCursor={false}
  />
</h1>

          <p className="hero-subtitle" style={{ animation: "fadeSlideUp 0.8s ease 0.6s both" }}>
            Frontend Developer, CSE Student & Cybersecurity enthusiast
            passionate about crafting Beautiful, Interactive,Secure
            digital experiences.
          </p>

          <p className="hero-desc" style={{ animation: "fadeSlideUp 0.8s ease 0.9s both" }}>
           I craft modern frontends,Enhance Security, and hunt vulnerabilities 
  to make the web a little less broken.
          </p>

          <div className="hero-buttons">
            <a href="/resumeee.pdf" target="blank" className="btn primary">
              
             Resume
            </a>

            <a href="#about" className="btn secondary">
              
              About Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-bg">
            {/* ADD YOUR IMAGE HERE */}
            <img
              src="/amrita.png"
              alt="profile"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <svg
        className="hero-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
};

export default Home;
