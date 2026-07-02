import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";


function Hero() {
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("GOOD MORNING");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("GOOD AFTERNOON");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("GOOD EVENING");
      } else {
        setGreeting("GOOD NIGHT");
      }
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="hero">
      
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero-optimized.mp4" type="video/mp4" />
      </video>

      <div className="hero-light-rays"></div>
      <div className="hero-focus-breath"></div>
      <div className="hero-film-grain"></div>
      <div className="hero-light-leak"></div>
      <div className="hero-lens-reflection"></div>

      <div className="hero-dust">
        {[...Array(35)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={logo}
          loading="eager"
          decoding="async"
          alt="SP Edits"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.75, rotateY: -35 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        />

        <motion.p
          className="gold-small"
          initial={{ opacity: 0, letterSpacing: "12px", y: 12 }}
          animate={{ opacity: 1, letterSpacing: "4px", y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          • Crafting Your Memories With Passion •
        </motion.p>

        <motion.h1
          className="hero-title clean-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        >
          <span className="title-white">SOHANG PRAJAPATI</span>
          <span className="title-gold">PHOTOGRAPHY & EDITS</span>
        </motion.h1>

       <motion.div
  className="dynamic-greeting"
  key={greeting}
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>
  <div className="greeting-title">{greeting}</div>

  <div className="greeting-divider"></div>
</motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45 }}
        >
         <a href="#booking" className="btn gold-btn">
  Book A Session
</a>
          <a href="#portfolio" className="btn outline-btn">
            View Portfolio
          </a>
        </motion.div>

        <motion.p
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          ↓ Scroll To Explore ↓
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;