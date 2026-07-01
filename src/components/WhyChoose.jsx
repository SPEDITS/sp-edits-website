import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaWallet,
  FaBolt,
  FaSmileBeam,
} from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
  cardPop,
  viewportOnce,
} from "../animations/motion";

function WhyChoose() {
  const features = [
    {
      icon: <FaWhatsapp />,
      title: "Direct WhatsApp Support",
      text: "Instant replies for bookings, updates, and project discussions.",
    },
    {
      icon: <FaWallet />,
      title: "Affordable Price",
      text: "Premium-quality work at budget-friendly pricing.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Delivery",
      text: "Quick turnaround with clean and professional output.",
    },
    {
      icon: <FaSmileBeam />,
      title: "Client Satisfaction",
      text: "Every project is delivered with care, quality, and perfection.",
    },
  ];

  return (
    <section id="whychoose" className="section why">
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
        <p>WHY CHOOSE US</p>
        <h2>Why Clients Choose SP EDITS</h2>
      </motion.div>

      <motion.div
        className="cards why-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {features.map((item) => (
          <motion.div
            key={item.title}
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
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhyChoose;