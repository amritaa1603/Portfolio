import { useEffect, useRef, useState } from "react";
import "./Recognition.css";

// ---- Documents ----
// Add your scanned/exported Letter of Recommendation and Experience Letter
// to src/assets/documents/, then uncomment the import + the matching
// line in DOCUMENTS below. Until then, a placeholder card is shown so
// nothing breaks.
import recommendationImg from "../assets/documents/letter-of-recommendation.jpg";
 import experienceImg from "../assets/documents/experience.png";

const DOCUMENTS = [
  {
    id: "d1",
    title: "Letter of Recommendation",
    meta: "ParshWebCraft · 2026",
    image: recommendationImg,
  },
  {
    id: "d2",
    title: "Experience Letter",
    meta: "ParshWebCraft · 2026",
    image:experienceImg,
  },
];

function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
}

export default function Recognition() {
  const [statementRef, statementRevealed] = useReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="recognition-page">
      {/* ===== STATEMENT HERO ===== */}
      <div className="statement-row" ref={statementRef}>
        <h2 className={`statement-heading ${statementRevealed ? "revealed" : ""}`}>
          I BUILD TRUST, UNTIL IT BECOMES
          <br />
          A RECORD OF MY OWN WORK.
        </h2>

        <div className={`statement-side ${statementRevealed ? "revealed" : ""}`}>
          <p>
            Every internship and project I take on is a chance to prove myself
            in a real environment, under real deadlines.
          </p>
          <p>
            These letters are proof of that work — written by the people I
            worked alongside, not just claims on a resume.
          </p>
          <a href="#recognition-docs" className="statement-link">
            View Recognition
          </a>
        </div>
      </div>

      {/* ===== DOCUMENT SHOWCASE ===== */}
      <div className="doc-showcase" id="recognition-docs">
        {DOCUMENTS.map((doc, idx) => (
          <DocCard key={doc.id} doc={doc} index={idx} onOpen={() => doc.image && setLightbox(doc)} />
        ))}
      </div>

      {lightbox && (
        <div className="recog-lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="recog-lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="recog-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={lightbox.image} alt={lightbox.title} className="recog-lightbox-img" />
            <p className="recog-lightbox-caption">{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function DocCard({ doc, index, onOpen }) {
  const [ref, revealed] = useReveal();
  const [hovering, setHovering] = useState(false);
  const blobPosRef = useRef(null);

  // Position the blob with a requestAnimationFrame lerp loop instead of a
  // CSS transition — a CSS transition restarts on every mousemove event
  // and produces a jerky, stepped trail. Easing the value toward the
  // target every frame gives a genuinely smooth, continuous follow.
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    function tick() {
      const t = targetPos.current;
      const c = currentPos.current;
      c.x += (t.x - c.x) * 0.14;
      c.y += (t.y - c.y) * 0.14;
      if (blobPosRef.current) {
        blobPosRef.current.style.transform = `translate(${c.x}px, ${c.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  return (
    <div
      className={`doc-card ${revealed ? "revealed" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="doc-blob-pos" ref={blobPosRef}>
        <div className={`doc-blob ${hovering ? "visible" : ""}`} />
      </div>

      <div className="doc-image-wrap">
        {doc.image ? (
          <img src={doc.image} alt={doc.title} className="doc-image" />
        ) : (
          <div className="doc-placeholder">
            <span>+ Add {doc.title}</span>
          </div>
        )}
      </div>
      <h3 className="doc-title">{doc.title}</h3>
      <p className="doc-meta">{doc.meta}</p>
    </div>
  );
}