import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT — Brand */}
        <div className="footer-brand">
          <div className="footer-avatar">AJ</div>
          <div>
            <h3>Amrita Jadhav</h3>
            <p className="footer-tagline">Frontend Developer & CS Engineer</p>
          </div>
          <p className="footer-bio">
            I build responsive, interactive web experiences — from clean UIs to full-stack applications.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/amritaa1603" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/amrita-jadhav-3ba11728a/" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            <a href="mailto:amritajdhv16033@gmail.com"><FaEnvelope size={20} /></a>
          </div>
        </div>

        {/* MIDDLE — Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="/projects">Projects</a>
       
        </div>

        {/* RIGHT — Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 amritajdhv16033@gmail.com</p>
          <p>📍 Indore, Madhya Pradesh, India</p>
          <p>💼 Open to opportunities</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Amrita Jadhav. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;