import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px';
        cursorRef.current.style.top = mouseY + 'px';
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = followerX + 'px';
        followerRef.current.style.top = followerY + 'px';
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateFollower();

    const handleMouseEnter = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)';
        cursorRef.current.style.opacity = '0.6';
        followerRef.current.style.transform = 'translate(-50%,-50%) scale(1.4)';
        followerRef.current.style.borderColor = 'rgba(168,85,247,0.7)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        cursorRef.current.style.opacity = '1';
        followerRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        followerRef.current.style.borderColor = 'rgba(168,85,247,0.4)';
      }
    };

    const setupHoverEffects = () => {
      const interactables = document.querySelectorAll('a, button, .project-card, .contact-card, .skill-category');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactables;
    };

    // Need to setup hover effects after a short delay so children mount
    let interactables = [];
    setTimeout(() => {
      interactables = setupHoverEffects();
    }, 500);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" id="cursorFollower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
