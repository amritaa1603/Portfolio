import { useState } from "react";
import Contact from "./Contact";

import "./Navbar.css";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li>
            <button
              className="nav-contact-btn"
              onClick={() => setContactOpen(true)}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}