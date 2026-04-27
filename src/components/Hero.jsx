import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  const roles = [
    'Project Manager',
    'Frontend Developer',
    'Web Operations Lead',
    'AI Workflow Expert',
    'Scrum Practitioner',
  ];

  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, 200 + i * 150);
          });
          setIsTypingStarted(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isTypingStarted) return;

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 90;
    const pauseTime = 2200;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [isTypingStarted, charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      const orbs = document.querySelectorAll('.orb');
      if (orbs[0]) orbs[0].style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
      if (orbs[1]) orbs[1].style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
      if (orbs[2]) orbs[2].style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="grid-lines"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="badge-dot"></span>
          Open to new opportunities
        </div>
        <h1 className="hero-title reveal">
          Deepak<br />
          <span className="gradient-text">{displayText}</span>
        </h1>
        <p className="hero-sub reveal">
          <strong>Assistant Project Manager</strong> with nearly <strong>10 years</strong> of experience in project coordination, frontend development, website operations, and client relationship management.
        </p>
        <div className="hero-actions reveal">
          <a href="mailto:deepakarora75421@gmail.com" className="btn btn-primary" id="heroContact">Get in Touch</a>
          <a href="https://www.linkedin.com/in/deepakarora7542/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" id="heroLinkedIn">LinkedIn ↗</a>
        </div>
        <div className="hero-stats reveal">
          <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Years Exp</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">50+</span><span class="stat-label">Projects</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Tech Stacks</span></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
