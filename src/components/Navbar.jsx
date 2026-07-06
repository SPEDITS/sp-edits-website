import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar({ menuOpen, setMenuOpen, closeMenu }) {
  const [activeSection, setActiveSection] = useState("home");
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "booking", "reviews"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
          }
        }
      });

      if (window.scrollY > lastScrollY && window.scrollY > 140) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Booking", id: "booking" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className={hideNavbar ? "navbar navbar-hide" : "navbar"}>

        <div className="section-divider-light"></div>
<div className="section-divider-light bottom"></div>

<div className="corner-left"></div>
<div className="corner-right"></div>

        <div className="brand">
          <img src={logo} loading="eager"
decoding="async" alt="SP Edits Logo" />

          <div>
            <h2>SP EDITS</h2>
            <p>Sohang Prajapati Photography & Edits</p>
          </div>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "active-link" : ""}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </nav>

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <img src={logo} loading="eager"
decoding="async" alt="SP Edits Logo" />

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={closeMenu}
            className={activeSection === link.id ? "active-link" : ""}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;