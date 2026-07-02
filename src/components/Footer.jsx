import {
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="luxury-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="footer-gold-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
      />

      <div className="footer-content">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.img
            src={logo}
            alt="SP Edits"
            loading="eager"
            decoding="async"
            whileHover={{
              scale: 1.06,
              rotate: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
          />

          <h3>SP EDITS</h3>

          <p>Sohang Prajapati Photography & Edits</p>
        </motion.div>

        <motion.div
          className="footer-info"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <p>
            <FaMapMarkerAlt />
            NAVSARI, GUJARAT
          </p>

          <p>
            <FaHeart />
            CRAFTING YOUR MEMORIES WITH PASSION
          </p>
        </motion.div>
      </div>

      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.08,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
        }}
      >
        <FaArrowUp />
      </motion.button>

      <motion.p
        className="footer-copy"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
      >
        © 2026 SP EDITS | All Rights Reserved
      </motion.p>
    </motion.footer>
  );
}

export default Footer;