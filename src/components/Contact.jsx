import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", number: "", query: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── EmailJS send ──────────────────────────────────────────────────────
    // Replace the three placeholders below with your actual EmailJS values:
    //   SERVICE_ID  → from EmailJS dashboard → Email Services
    //   TEMPLATE_ID → from EmailJS dashboard → Email Templates
    //   PUBLIC_KEY  → from EmailJS dashboard → Account → General
    //
    // In your EmailJS template use these variables:
    //   {{from_name}}, {{from_number}}, {{message}}, {{to_email}}
    // ─────────────────────────────────────────────────────────────────────
    const SERVICE_ID  = "amrita16033@gmail.com";
    const TEMPLATE_ID = "template_p7heufn";
    const PUBLIC_KEY  = "rbXGFR26yVx3GkvKe";

    const payload = {
      service_id:  SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id:     PUBLIC_KEY,
      template_params: {
        from_name:   form.name,
        from_number: form.number,
        message:     form.query,
        to_email:    "amrita16033@gmail.com",
      },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", number: "", query: "" });
        setTimeout(() => { setStatus("idle"); onClose(); }, 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        {/* decorative blobs */}
        <span className="blob blob-1" />
        <span className="blob blob-2" />

        <button className="contact-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="contact-header">
          <p className="contact-eyebrow">Let's talk</p>
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-sub">I'll get back to you as soon as possible.</p>
        </div>

        {status === "success" ? (
          <div className="contact-success">
            <span className="success-icon">✦</span>
            <p>Message sent! Talk soon ✨</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="Amrita Sharma"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="number">Phone Number</label>
              <input
                id="number" name="number" type="tel"
                placeholder="+91 98765 43210"
                value={form.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="query">Your Message</label>
              <textarea
                id="query" name="query"
                placeholder="Tell me about your project or query…"
                rows={4}
                value={form.query}
                onChange={handleChange}
                required
              />
            </div>

            {status === "error" && (
              <p className="contact-error">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
