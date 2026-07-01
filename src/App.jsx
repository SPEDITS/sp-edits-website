import { useEffect, useState } from "react";
import "./index.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import CinematicEffects from "./components/CinematicEffects";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    requirements: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [loading]);

  const closeMenu = () => setMenuOpen(false);

  const portfolioItems = [
    {
      title: "Portrait Shoot",
      category: "Photography",
      img: "/portfolio/photo1.jpg.jpeg",
    },
    {
      title: "Cinematic Edit",
      category: "Reels",
      img: "/portfolio/photo2.jpg.jpeg",
    },
    {
      title: "Cricket Edit",
      category: "Cricket",
      img: "/portfolio/photo3.jpg.jpeg",
    },
    {
      title: "Event Coverage",
      category: "Photography",
      img: "/portfolio/photo4.jpg.jpeg",
    },
    {
      title: "Ganpati Shoot",
      category: "Ganpati",
      img: "/portfolio/photo5.jpg.jpeg",
    },
    {
      title: "Premium Design",
      category: "Designs",
      img: "/portfolio/photo6.jpg.jpeg",
    },
  ];

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const currentIndex = filteredPortfolio.findIndex(
    (item) => item.title === selectedImage?.title
  );

  const nextImage = () => {
    if (currentIndex === -1) return;

    setSelectedImage(
      filteredPortfolio[(currentIndex + 1) % filteredPortfolio.length]
    );
  };

  const prevImage = () => {
    if (currentIndex === -1) return;

    setSelectedImage(
      filteredPortfolio[
        (currentIndex - 1 + filteredPortfolio.length) %
          filteredPortfolio.length
      ]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919601603440";

    const message = `
Hello SP EDITS,

I want to book a service.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Location: ${formData.location}
Requirements: ${formData.requirements}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />

      <div className="site">
        <video
          className="site-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero-optimized.mp4" type="video/mp4" />
        </video>

        <div className="site-bg-overlay"></div>

       

        <div className="gold-particles">
          {[...Array(18)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          closeMenu={closeMenu}
        />

        <Hero />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal reveal-delay-1">
          <Services />
        </div>

        <div className="reveal reveal-delay-1">
          <Portfolio
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredPortfolio={filteredPortfolio}
            setSelectedImage={setSelectedImage}
          />
        </div>

        <div className="reveal reveal-delay-2">
          <WhyChoose />
        </div>

        <div className="reveal reveal-delay-2">
          <Booking
            formData={formData}
            handleChange={handleChange}
            handleBookingSubmit={handleBookingSubmit}
          />
        </div>

        <div className="reveal reveal-delay-3">
          <Reviews />
        </div>

        <div className="reveal reveal-delay-3">
          <Contact />
        </div>

        <Footer />

        <Lightbox
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          nextImage={nextImage}
          prevImage={prevImage}
          currentIndex={currentIndex}
          totalImages={filteredPortfolio.length}
        />
      </div>
    </>
  );
}

export default App;