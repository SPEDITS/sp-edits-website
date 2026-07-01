import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

import { fadeUp, zoomIn, viewportOnce } from "../animations/motion";

function Contact() {
  const contacts = [
    {
      icon: <FaInstagram />,
      title: "Instagram",
      text: "@sp_edits_13",
      link: "https://www.instagram.com/sp_edits_13",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "+91 9601603440",
      link: "https://wa.me/919601603440",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook",
      text: "Sohang Prajpati Photography & Edits",
      link: "https://www.facebook.com/share/1D5poy9xGZ/",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "spvideography13@gmail.com",
      link: "mailto:spvideography13@gmail.com",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      text: "Sohang Prajapati",
      link: "https://www.linkedin.com/in/sohang-prajapati-4b0594327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      icon: <FaYoutube />,
      title: "YouTube",
      text: "Coming Soon",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section contact">

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
        <p>CONTACT</p>
        <h2>Let's Connect</h2>
      </motion.div>

      <motion.div
        className="contact-box luxury-card"
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="contact-grid">
          {contacts.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target={item.link === "#" ? "_self" : "_blank"}
              rel="noreferrer"
              className="contact-link luxury-card"
            >
              <div className="contact-circle">{item.icon}</div>

              <div>
                <h4>{item.title}</h4>
                <span>{item.text}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;