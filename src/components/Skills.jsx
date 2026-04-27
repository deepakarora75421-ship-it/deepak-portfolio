import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
          });
          
          // Stagger delays for skill categories
          entry.target.querySelectorAll('.skill-category').forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * 60);
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

  const skillGroups = [
    {
      title: 'Project Management',
      skills: ['Scrum Methodology', 'Agile Support', 'Project Leadership', 'Task Planning', 'Scheduling', 'Reporting', 'Documentation', 'Time Management'],
    },
    {
      title: 'Communication & Collaboration',
      skills: ['Slack', 'Jira', 'Microsoft Teams', 'Client Communication', 'Stakeholder Mgmt', 'Team Collaboration', 'Problem Solving'],
    },
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'Sass / SCSS', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'Responsive Design', 'Cross-Browser'],
    },
    {
      title: 'CMS & Platforms',
      skills: ['WordPress', 'Unbounce', 'Instapage', 'Drupal (Basic)', 'Website Maintenance', 'Web Operations'],
    },
    {
      title: 'Design & Dev Tools',
      skills: ['Figma', 'Sketch', 'InVision', 'Git', 'Version Control', 'UI/UX Implementation'],
    },
    {
      title: 'AI & Productivity',
      skills: ['ChatGPT', 'Claude AI', 'Cursor AI', 'Antigravity', 'OpenAI Codex', 'AI Frontend Dev', 'AI Workflow Automation'],
    },
  ];

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">What I Know</div>
        <h2 className="section-title reveal">Skills &amp; <span className="gradient-text">Technologies</span></h2>
        <p className="section-sub reveal">A curated set of tools, methodologies, and technologies I use to deliver world-class projects.</p>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-category reveal" key={index}>
              <h3 className="cat-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill, sIndex) => (
                  <span className="skill-tag" key={sIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
