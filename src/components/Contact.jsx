import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState('Send Message →');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
          });
          
          entry.target.querySelectorAll('.contact-card').forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * 80);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('✓ Message Sent!');
      e.target.reset();
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormStatus('Send Message →');
      }, 3000);
    }, 1200);
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Let's Connect</div>
        <h2 className="section-title reveal">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-sub reveal">I'm always open to collaborations and new opportunities. Let's build something great together.</p>
        <div className="contact-grid">
          <div className="contact-cards reveal">
            <a href="mailto:deepakarora75421@gmail.com" className="contact-card" id="emailCard">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <span className="contact-type">Email</span>
                <span className="contact-val">deepakarora75421@gmail.com</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/deepakarora7542/" target="_blank" rel="noopener noreferrer" className="contact-card" id="linkedinCard">
              <div className="contact-icon">🔗</div>
              <div className="contact-info">
                <span className="contact-type">LinkedIn</span>
                <span className="contact-val">linkedin.com/in/deepakarora7542</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a href="tel:+918872822188" className="contact-card" id="phoneCard">
              <div className="contact-icon">📞</div>
              <div className="contact-info">
                <span className="contact-type">Phone</span>
                <span className="contact-val">+91 88728 22188</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <div className="contact-card no-link" id="locationCard">
              <div className="contact-icon">📍</div>
              <div className="contact-info">
                <span className="contact-type">Location</span>
                <span className="contact-val">Ludhiana, Punjab, India</span>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" id="contactForm" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group">
              <label htmlFor="nameInput">Your Name</label>
              <input type="text" id="nameInput" placeholder="John Smith" required />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Your Email</label>
              <input type="email" id="emailInput" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="messageInput">Message</label>
              <textarea id="messageInput" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary btn-full ${isSubmitting ? 'submitting' : ''}`} 
              id="formSubmit"
              disabled={isSubmitting}
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
