import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach(reveal => observer.observe(reveal));
  }, []);

  return (
    <div className="contact-page">
     {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-content fade-in">
          <h1>Contact</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* ===== Info Boxes ===== */}
      <section className="contact-info">
         <div className="info-box reveal">
          <h3>✉ Email</h3>
          <p><a href="mailto:murtazawebcreations@email.com">murtazawebcreations@email.com</a></p>
        </div>

        <div className="info-box reveal">
          <h3>📞 Phone</h3>
          <p><a href="tel:+923164667703">+92 316 4667703</a></p>
        </div>
        
        <div className="info-box reveal">
          <h3>📘 Facebook</h3>
          <p><a href="https://www.facebook.com/murtazawebcreations" target="_blank" rel="noopener noreferrer">facebook/murtazawebcreations</a></p></div>

        <div className="info-box reveal">
          <h3>🔗 LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/murtazawebcreations/" target="_blank" rel="noopener noreferrer">linkedin/murtazawebcreations</a></p>
        </div>
      </section>

      {/* ===== Contact Form Section ===== */}
      <section className="contact-form-section">

  <div className="form-left reveal">
    <h2>Send Me a Message</h2>
    <p>I’ll get back to you within 24 hours.</p>

    <div className="steps">

      <div className="step">
        <div className="step-number">1</div>
        <div>
          <h4>Fill the Form</h4>
          <p>Provide your project details and requirements</p>
        </div>
      </div>

      <div className="step">
        <div className="step-number">2</div>
        <div>
          <h4>Get Consultation</h4>
          <p>I will analyze your needs and provide expert advice</p>
        </div>
      </div>

      <div className="step">
        <div className="step-number">3</div>
        <div>
          <h4>Start Building</h4>
          <p>Begin the journey to bring your vision to life</p>
        </div>
      </div>

    </div>
  </div>

  <form className="contact-form reveal">
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="Email Address" required />
    <input type="text" placeholder="Subject" />
    <textarea placeholder="Your Message" rows="5"></textarea>
    <button type="submit">Send Message</button>
  </form>

</section>

    </div>
  );
};

export default Contact;