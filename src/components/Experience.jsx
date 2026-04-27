import { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
          });
          
          entry.target.querySelectorAll('.timeline-item').forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * 120);
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
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">My Journey</div>
        <h2 className="section-title reveal">Work <span className="gradient-text">Experience</span></h2>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="job-title">Assistant Project Manager</h3>
                  <p className="company">LN Webworks Private Limited &nbsp;|&nbsp; <span>Ludhiana, Punjab</span></p>
                </div>
                <span className="job-date">2014 – Present · 10+ Years</span>
              </div>
              <ul className="job-duties">
                <li>Manage end-to-end coordination of website development and maintenance projects.</li>
                <li>Gather client requirements and translate them into actionable development tasks.</li>
                <li>Plan project schedules, allocate resources, and monitor task progress across teams.</li>
                <li>Coordinate with developers, designers, QA teams, and stakeholders for timely delivery.</li>
                <li>Handle client communication, reporting, issue resolution, and status updates.</li>
                <li>Support frontend implementation, UI improvements, and responsive website updates.</li>
                <li>Utilize modern AI tools to accelerate coding, content generation, research, and productivity workflows.</li>
                <li>Ensure quality standards, timely deployment, and post-launch support.</li>
                <li>Maintain project documentation and streamline internal workflows.</li>
              </ul>
              <div className="job-tags">
                <span>Scrum</span><span>Jira</span><span>HTML5</span><span>CSS3</span><span>WordPress</span><span>Figma</span><span>Git</span><span>AI Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
