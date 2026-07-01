import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  cardPop,
  viewportOnce,
} from "../animations/motion";

function AnimatedCounter({ end, duration = 2 }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, count, end, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function About() {
  const statHover = {
    y: -10,
    rotateX: 5,
    rotateY: -5,
    scale: 1.03,
  };

  const statTransition = {
    type: "spring",
    stiffness: 220,
    damping: 18,
  };

  return (
    <section id="about" className="section about">

      <div className="section-divider-light"></div>
<div className="section-divider-light bottom"></div>

<div className="corner-left"></div>
<div className="corner-right"></div>

      <motion.div
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p>ABOUT STUDIO</p>
        <h2>Capturing Moments , Crafting Memories </h2>
      </motion.div>

      <div className="about-wide-grid">
        <motion.div
          className="about-profile-card luxury-card"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="profile-frame">
            
<div className="profile-particles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<img src="/portfolio/SOHANG.jpg" alt="Sohang Prajapati" />
          </div>

          <h3>Sohang Prajapati</h3>
          <p>Founder • Photographer • Editor </p>

          <div className="about-info-pill luxury-card">
            <FaMapMarkerAlt />
            <span>Navsari, Gujarat, India</span>
          </div>

          <div className="about-info-pill luxury-card">
            <FaCalendarAlt />
            <span>Available for Projects</span>
          </div>
        </motion.div>

        <motion.div
          className="about-main-card about-main-wide luxury-card"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="about-label">SP EDITS</p>

          <h3>Premium Photography & Cinematic Editing Studio</h3>

          <p>
            SP Edits — Sohang Prajapati Photography & Edits 
          </p>

          <p>
           We provide:

          • Professional Photography
          • Reel Editing
          • Cricket Edits
          • Poster & Banner Design
          • Instagram Post Design
          • Digital Patrika / Kankotri Design
          • Ganpati Bappa Shoots & Editing
          • Event Coverage
          • Pre-Wedding Shoots
          </p>

          <p>
            We aim to make your memories, events and brand stand out with
            quality, creativity and perfection.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="about-stats-bar luxury-card"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          variants={cardPop}
          whileHover={statHover}
          transition={statTransition}
        >
          <FaBriefcase />
          <h3>
            <AnimatedCounter end={200} duration={2.5} />+
          </h3>
          <p>Projects Completed</p>
        </motion.div>

        <motion.div
          variants={cardPop}
          whileHover={statHover}
          transition={statTransition}
        >
          <FaUsers />
          <h3>
            <AnimatedCounter end={50} duration={2} />+
          </h3>
          <p>Happy Clients</p>
        </motion.div>

        <motion.div
          variants={cardPop}
          whileHover={statHover}
          transition={statTransition}
        >
          <FaClock />
          <h3>
            <AnimatedCounter end={3} duration={1.8} />+
          </h3>
          <p>Years Experience</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;