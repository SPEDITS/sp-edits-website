import { motion } from "framer-motion";

import {
  FaCamera,
  FaFilm,
  FaVideo,
  FaHeart,
  FaMagic,
} from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
  cardPop,
  viewportOnce,
} from "../animations/motion";

function Services() {
  const services = [
    {
      icon: <FaCamera />,
      title: "Photography",
      text: "Portraits, Events, Festivals, Sports, Products and Professional Shoots.",
    },
    {
      icon: <FaFilm />,
      title: "Reel Editing",
      text: "Cinematic Reels, Instagram Edits, Highlights and Social Videos.",
    },
    {
      icon: <FaVideo />,
      title: "Cinematography",
      text: "Creative Video Shooting with Cinematic Angles and Storytelling.",
    },
    {
      icon: <FaHeart />,
      title: "Pre-Wedding Shoot",
      text: "Pre-wedding Shoot, Couple Reel Editing, Couple Photo Editing.",
    },
    {
      icon: <FaMagic />,
      title: "Design Services",
      text: "Posters, Banners, Digital Patrika, Instagram posts, and many more.",
    },
    {
      icon: <FaCamera />,
      title: "Ganpati Bappa Shoot",
      text: "Professional Ganpati Photography, Cinematic Reels, Event Coverage and Creative Bappa Memories.",
    },
  ];

  return (
    <section id="services" className="section">
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
        <p>OUR SERVICES</p>
        <h2>What We Create</h2>
      </motion.div>

      <motion.div
        className="cards"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="service-card luxury-card"
            variants={cardPop}
            whileHover={{
              y: -10,
              scale: 1.035,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 16,
            }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;