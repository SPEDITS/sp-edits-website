import { useEffect, useRef } from "react";

function ScrollProgress() {
  const barRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let frame;

    const updateTarget = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      target = maxScroll > 0 ? scrollTop / maxScroll : 0;
    };

    const animate = () => {
      current += (target - current) * 0.12;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${current})`;
      }

      if (orbRef.current) {
        orbRef.current.style.left = `${current * 100}%`;
      }

      frame = requestAnimationFrame(animate);
    };

    updateTarget();
    animate();

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div ref={barRef} className="scroll-progress-bar" />
      <div ref={orbRef} className="scroll-progress-orb" />
    </div>
  );
}

export default ScrollProgress;