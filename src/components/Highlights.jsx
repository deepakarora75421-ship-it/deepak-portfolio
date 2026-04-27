import { useEffect, useRef } from 'react';

const Highlights = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
          });
          
          entry.target.querySelectorAll('.project-card').forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * 70);
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

  const highlightItems = [
    {
      cat: 'Project Management',
      name: 'End-to-End Project Coordination',
      desc: 'Managed multiple simultaneous web development projects from requirements gathering to deployment, ensuring on-time delivery and stakeholder satisfaction.',
      stack: ['Scrum', 'Jira', 'Agile', 'Slack'],
    },
    {
      cat: 'Frontend Development',
      name: 'Responsive Website Builds',
      desc: 'Implemented responsive UI across multiple client websites using HTML5, CSS3, Bootstrap, and Tailwind CSS — ensuring cross-browser compatibility and great UX.',
      stack: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind'],
    },
    {
      cat: 'CMS & Platforms',
      name: 'WordPress Site Management',
      desc: 'Built and maintained multiple WordPress websites, including theme customization, plugin management, performance optimization, and ongoing content updates.',
      stack: ['WordPress', 'Unbounce', 'Instapage', 'Drupal'],
    },
    {
      cat: 'Client Relations',
      name: 'Client Communication & Reporting',
      desc: 'Acted as the primary point of contact for clients — conducting requirement calls, delivering progress reports, and ensuring clear and professional communication at every stage.',
      stack: ['Teams', 'Slack', 'Email', 'Jira'],
    },
    {
      cat: 'AI & Automation',
      name: 'AI-Powered Workflow Integration',
      desc: 'Leveraged cutting-edge AI tools like ChatGPT, Claude AI, Cursor, and Antigravity to accelerate frontend coding, content generation, and team productivity workflows.',
      stack: ['ChatGPT', 'Claude AI', 'Cursor AI', 'Antigravity'],
    },
    {
      cat: 'Design Implementation',
      name: 'Figma to Code Conversions',
      desc: 'Translated designer mockups from Figma, Sketch, and InVision into pixel-perfect, responsive web pages with a strong focus on UI accuracy and UX quality.',
      stack: ['Figma', 'Sketch', 'InVision', 'HTML/CSS'],
    },
    {
      cat: 'Operations & QA',
      name: 'Website Maintenance & QA',
      desc: 'Oversaw ongoing maintenance, bug fixes, performance checks, and quality assurance processes — ensuring high availability and reliability for all client web properties.',
      stack: ['Git', 'Cross-Browser', 'QA', 'Web Ops'],
    },
    {
      cat: 'Leadership',
      name: 'Team Coordination & Scheduling',
      desc: 'Coordinated cross-functional teams including developers, designers, and QA engineers — creating schedules, tracking milestones, and removing bottlenecks to keep projects on track.',
      stack: ['Resource Mgmt', 'Scheduling', 'Documentation', 'Reporting'],
    },
    {
      cat: 'Styling Frameworks',
      name: 'Modern CSS & Framework Adoption',
      desc: 'Championed adoption of modern styling tools including Sass/SCSS and Tailwind CSS across projects, improving code maintainability and development speed significantly.',
      stack: ['Sass/SCSS', 'Tailwind CSS', 'jQuery', 'Bootstrap'],
    },
  ];

  const handleCardMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const handleCardMouseLeave = (card) => {
    card.style.transform = '';
  };

  return (
    <section className="projects section" id="highlights" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">What I've Delivered</div>
        <h2 className="section-title reveal">Key <span className="gradient-text">Highlights</span></h2>
        <p className="section-sub reveal">Areas where I've driven consistent impact across projects and teams over the years.</p>
        <div className="projects-grid">
          {highlightItems.map((item, index) => (
            <div 
              className="project-card reveal" 
              key={index}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
            >
              <div className="project-cat">{item.cat}</div>
              <h3 className="project-name">{item.name}</h3>
              <p className="project-desc">{item.desc}</p>
              <div className="project-stack">
                {item.stack.map((s, sIndex) => (
                  <span key={sIndex}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
