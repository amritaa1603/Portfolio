import "./Home.css";


const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            <Sparkles size={16} />
            <span>hey there</span>
          </div>

          <h1 className="hero-title">
            I'm <span>Amrita Jadhav</span>
          </h1>

          <p className="hero-subtitle">
            Frontend Developer, CSE Student & Creative Builder
            passionate about crafting beautiful and interactive
            digital experiences.
          </p>

          <p className="hero-desc">
            Welcome to my little corner of the internet where
            I build modern web applications and continuously
            learn new technologies.
          </p>

          <div className="hero-buttons">
            <a href="/resumeee.pdf" target="blank" className="btn primary">
              <Code2 size={18} />
             Resume
            </a>

            <a href="#about" className="btn secondary">
              <Heart size={18} />
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
