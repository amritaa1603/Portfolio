import { useEffect, useMemo, useRef, useState } from "react";
import "./Cert.css";

// Local certificate images — filenames match what's in src/assets/certificates/
import awsCloudImg from "../assets/certificates/aws cloud.png";
import awsForageImg from "../assets/certificates/aws forage.png";
import awsTechnicalImg from "../assets/certificates/aws technical.png";
import bitsImg from "../assets/certificates/bits.png";
import ciscoCyberImg from "../assets/certificates/cisco cyber.png";
import ctfOwaspImg from "../assets/certificates/ctf owasp.png";
import deloitteImg from "../assets/certificates/deloitte.png";
import googleItImg from "../assets/certificates/google it.png";
import hpCyberImg from "../assets/certificates/hpcyber.png";
import internshipImg from "../assets/certificates/internship.png";
import matlabImg from "../assets/certificates/matlab.png";
import mponlineImg from "../assets/certificates/mponline.png";
import nptelImg from "../assets/certificates/nptel.png";
import tcsImg from "../assets/certificates/tcs.png";
import womanWhoMasterImg from "../assets/certificates/woman who master.png";

// Official company logos — add files to src/assets/logos/ and uncomment
// the matching import below. Any issuer without a real logo import here
// automatically falls back to the text wordmark, so nothing breaks.
//  import googleLogo from "../assets/logos/google.png";
//  import awsLogo from "../assets/logos/aws.png";
//  import ciscoLogo from "../assets/logos/cisco.png";
//  import deloitteLogo from "../assets/logos/deloitte.png";
// import hpLifeLogo from "../assets/logos/hplife.png";
// import mathworksLogo from "../assets/logos/mathworks.png";
// import mponlineLogo from "../assets/logos/mponline.png";
// import nptelLogo from "../assets/logos/nptel.png";
// import tataLogo from "../assets/logos/tata.png";
// import logitechLogo from "../assets/logos/logitech.png";
// import owaspLogo from "../assets/logos/owasp.png";
// import parshwebcraftLogo from "../assets/logos/parshwebcraft.png";

// Map issuer name -> imported logo file. Leave entries commented out
// above and this object empty for that issuer — the text wordmark
// below is used instead until a real logo is wired in.
const LOGO_IMAGES = {
  //  Google: googleLogo,
  // AWS: awsLogo,
  // // Cisco: ciscoLogo,
  // Deloitte: deloitteLogo,
  // "HP LIFE": hpLifeLogo,
  // MathWorks: mathworksLogo,
  // MPOnline: mponlineLogo,
  // NPTEL: nptelLogo,
  // TATA: tataLogo,
  // Logitech: logitechLogo,
  // "OWASP VIT Bhopal": owaspLogo,
  // ParshWebCraft: parshwebcraftLogo,
};

// Real certificates from your uploads. Add more by copying the object
// shape below — the grid, sidebar filter, and animations scale automatically.
// credentialUrl -> public verify link (opens in a new tab)
// image         -> local certificate file (opens in an in-page lightbox)
// If both are empty, the button is disabled.
const CERTIFICATES = [
  { id: "c1", title: "AWS Certified Cloud Practitioner — Practice Question Set", issuer: "AWS", date: "Sep 2025", credentialId: "", credentialUrl: "", image: awsCloudImg },
  { id: "c2", title: "Solutions Architecture Job Simulation", issuer: "AWS", date: "May 2025", credentialId: "EMpwjjFKzfFBhCLcR", credentialUrl: "", image: awsForageImg },
  { id: "c3", title: "AWS Technical Essentials", issuer: "AWS", date: "Sep 2025", credentialId: "", credentialUrl: "", image: awsTechnicalImg },
  { id: "c4", title: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "May 2025", credentialId: "", credentialUrl: "https://coursera.org/verify/AHW0HE8ML549", image: bitsImg },
  { id: "c5", title: "Introduction to Cybersecurity", issuer: "Cisco", date: "May 2026", credentialId: "7b8535c7-ce67-4837", credentialUrl: "", image: ciscoCyberImg },
  { id: "c6", title: "HackZero'26 — CTF Participation", issuer: "OWASP VIT Bhopal", date: "Mar 2026", credentialId: "", credentialUrl: "", image: ctfOwaspImg },
  { id: "c7", title: "Cyber Job Simulation", issuer: "Deloitte", date: "Jun 2026", credentialId: "X84Q4n5vkeijhFqhd", credentialUrl: "", image: deloitteImg },
  { id: "c8", title: "Google IT Support Certificate", issuer: "Google", date: "Feb 2026", credentialId: "", credentialUrl: "https://www.credly.com/go/wYL8Qw9r", image: googleItImg },
  { id: "c9", title: "Introduction to Cybersecurity Awareness", issuer: "HP LIFE", date: "May 2025", credentialId: "c65c68a3-4c24", credentialUrl: "", image: hpCyberImg },
  { id: "c10", title: "Security Analyst Internship", issuer: "ParshWebCraft", date: "Jul 2026", credentialId: "PWC-INT-2026-024", credentialUrl: "", image: internshipImg },
  { id: "c11", title: "MATLAB Onramp", issuer: "MathWorks", date: "Aug 2023", credentialId: "", credentialUrl: "", image: matlabImg },
  { id: "c12", title: "AI/ML Internship", issuer: "MPOnline", date: "Jul 2026", credentialId: "MPO/INT/26-27/07/870", credentialUrl: "", image: mponlineImg },
  { id: "c13", title: "Blockchain and its Applications", issuer: "NPTEL", date: "Apr 2025", credentialId: "NPTEL25CS08S542800211", credentialUrl: "", image: nptelImg },
  { id: "c14", title: "TCS iON Career Edge — Young Professional", issuer: "TATA", date: "Jun 2025", credentialId: "240640-28367787-1016", credentialUrl: "", image: tcsImg },
  { id: "c15", title: "Women Who Master Hackathon", issuer: "Logitech", date: "Jul 2026", credentialId: "", credentialUrl: "", image: womanWhoMasterImg },
];

function LogoMark({ issuer }) {
  // Prefer a real logo image if one has been wired in via LOGO_IMAGES.
  if (LOGO_IMAGES[issuer]) {
    return (
      <img
        src={LOGO_IMAGES[issuer]}
        alt={`${issuer} logo`}
        className="logo-img"
      />
    );
  }

  switch (issuer) {
    case "Google":
      return (
        <span className="logo-mark logo-google">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </span>
      );
    case "AWS":
      return <span className="logo-mark logo-aws">aws</span>;
    case "NPTEL":
      return <span className="logo-mark logo-nptel">NPTEL</span>;
    case "HP LIFE":
      return (
        <span className="logo-mark logo-hp">
          hp<span className="logo-hp-sub">LIFE</span>
        </span>
      );
    case "Deloitte":
      return (
        <span className="logo-mark logo-deloitte">
          Deloitte<span className="logo-dot">.</span>
        </span>
      );
    case "CodeRed":
      return (
        <span className="logo-mark logo-codered">
          <span className="logo-diamond">◆</span>code<b>red</b>
        </span>
      );
    case "OWASP VIT Bhopal":
      return (
        <span className="logo-mark logo-owasp">
          <span className="logo-shield">🛡</span>OWASP
        </span>
      );
    case "Cisco":
      return <span className="logo-mark logo-cisco">cisco</span>;
    case "ParshWebCraft":
      return <span className="logo-mark logo-pwc">PWC</span>;
    case "MathWorks":
      return (
        <span className="logo-mark logo-mathworks">
          <span className="logo-triangle">◆</span>MathWorks
        </span>
      );
    case "MPOnline":
      return <span className="logo-mark logo-mponline">MPO</span>;
    case "TATA":
      return <span className="logo-mark logo-tata">TATA</span>;
    case "Logitech":
      return <span className="logo-mark logo-logitech">logitech</span>;
    default:
      return <span className="logo-mark">{issuer}</span>;
  }
}

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxCert, setLightboxCert] = useState(null);
  const cardRefs = useRef({});

  const issuers = useMemo(
    () => ["All", ...new Set(CERTIFICATES.map((c) => c.issuer))],
    []
  );

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? CERTIFICATES
        : CERTIFICATES.filter((c) => c.issuer === activeFilter),
    [activeFilter]
  );

  // Scroll-triggered reveal — each card animates in as it enters view,
  // staggered in groups of 5 to match the bento row rhythm.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="certs-page">
      <aside className="certs-sidebar">
        <h1 className="sidebar-heading">
          My <span>Certificates</span>
        </h1>
        <p className="sidebar-sub">
          {CERTIFICATES.length} certifications earned across security,
          cloud, and development.
        </p>

        <nav className="issuer-nav">
          <ul>
            {issuers.map((issuer) => (
              <li
                key={issuer}
                className={activeFilter === issuer ? "active" : ""}
                onClick={() => setActiveFilter(issuer)}
              >
                {issuer}
              </li>
            ))}
          </ul>
        </nav>

        <button className="reset-btn" onClick={() => setActiveFilter("All")}>
          View all certificates
        </button>
      </aside>

      <main className="certs-grid-wrap">
        <div className="bento-grid">
          {filtered.map((cert, idx) => (
            <div
              key={cert.id}
              ref={(el) => (cardRefs.current[cert.id] = el)}
              className="cert-card"
              style={{ transitionDelay: `${(idx % 5) * 80}ms` }}
            >
              <div className="cert-blob">
                <LogoMark issuer={cert.issuer} />
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-meta">
                {cert.issuer} &middot; {cert.date}
              </p>

              <div className="card-actions">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-order"
                  >
                    Verify
                  </a>
                )}

                {cert.image && (
                  <button
                    className="btn-order btn-view"
                    onClick={() => setLightboxCert(cert)}
                  >
                    View
                  </button>
                )}

                {!cert.credentialUrl && !cert.image && (
                  <button className="btn-order disabled" disabled>
                    View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {lightboxCert && (
        <div className="lightbox-overlay" onClick={() => setLightboxCert(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxCert(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={lightboxCert.image}
              alt={lightboxCert.title}
              className="lightbox-img"
            />
            <p className="lightbox-caption">
              {lightboxCert.title} &middot; {lightboxCert.issuer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}