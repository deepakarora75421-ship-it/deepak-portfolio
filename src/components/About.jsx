import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
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

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Who I Am</div>
        <div className="about-grid">
          <div className="about-left reveal">
            <h2 className="section-title">Delivering projects<br /><span className="gradient-text">on time, every time</span></h2>
            <p className="about-text">
              Highly motivated and results-driven Assistant Project Manager with nearly 10 years of experience in project coordination, frontend development, website operations, and client relationship management. Currently associated with <strong>LN Webworks Private Limited</strong> since 2014.
            </p>
            <p className="about-text">
              Proven expertise in handling multiple web projects, coordinating with internal teams and clients, managing timelines, and ensuring smooth project delivery. Strong hands-on experience in frontend technologies, CMS platforms, responsive design, and development workflows — enabling efficient execution of business and technical requirements.
            </p>
            <div className="about-tags">
              <span className="tag">Scrum / Agile</span>
              <span className="tag">Client Communication</span>
              <span className="tag">Frontend Dev</span>
              <span className="tag">Team Leadership</span>
              <span className="tag">AI-Powered Workflows</span>
            </div>
          </div>
            <div className="about-avatar">
              <div className="avatar-placeholder">
                <img src="/src/assets/profile.jpg" alt="Deepak Arora" className="profile-img" />
              </div>
            </div>
              <div className="about-info-list">
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Ludhiana, Punjab, India</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">deepakarora75421@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 88728 22188</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education</span>
                  <span className="info-value">B.Sc. IT</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">Hindi · Punjabi · English</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value status-open"><span className="pulse"></span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
