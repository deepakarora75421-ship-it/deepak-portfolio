import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    /* ─── SMOOTH SCROLL FOR ANCHORS ─── */
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    /* ─── SCROLL PROGRESS BAR ─── */
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed; top: 0; left: 0; height: 2px; z-index: 9999;
      background: linear-gradient(90deg,#7c3aed,#a855f7,#06b6d4);
      width: 0%; transition: width 0.1s linear;
      box-shadow: 0 0 8px rgba(168,85,247,0.8);
    `;
    document.body.prepend(progressBar);

    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / total) * 100;
      progressBar.style.width = pct + '%';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
      progressBar.remove();
    };
  }, []);

  return (
    <>
      <Cursor />
      <div className="noise"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Highlights />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
