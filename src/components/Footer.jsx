import {
  FaGlobe,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="luxury-footer">
      <div className="footer-gold-line"></div>

      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} loading="eager"
decoding="async" alt="SP Edits" />

          <h3>SP EDITS</h3>

          <p>Sohang Prajapati Photography & Edits</p>
        </div>

        <div className="footer-info">
          <p>
            <FaMapMarkerAlt />
            NAVSARI, GUJARAT
          </p>

          <p>
            <FaHeart />
            CRAFTING YOUR MEMORIES WITH PASSION
          </p>
        </div>
      </div>

      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      <p className="footer-copy">
        © 2026 SP EDITS | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;