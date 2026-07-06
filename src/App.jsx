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
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Ganapati Photography");
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
  // ==============================
  // Ganapati Photography
  // ==============================
  {
    title: "Ganapati Photography",
    category: "Ganapati Photography",
    img: "/portfolio/ganapati-photo-1.jpg",
  },
  {
    title: "Ganapati Photography 02",
    category: "Ganapati Photography",
    img: "/portfolio/ganapati-photo-2.jpg",
  },
  {
    title: "Ganapati Photography 03",
    category: "Ganapati Photography",
    img: "/portfolio/ganapati-photo-3.jpg",
  },

  // ==============================
  // Pre-Wedding Photography
  // ==============================
  {
    title: "Pre-Wedding Photography",
    category: "Pre-Wedding Photography",
    img: "/portfolio/prewedding-photo-1.jpg",
  },
  {
    title: "Pre-Wedding Photography 02",
    category: "Pre-Wedding Photography",
    img: "/portfolio/prewedding-photo-2.jpg",
  },

  // ==============================
  // Portrait Photography
  // ==============================
  {
    title: "Portrait Photography",
    category: "Portrait Photography",
    img: "/portfolio/portrait-1.jpg",
  },
  {
    title: "Portrait Photography 02",
    category: "Portrait Photography",
    img: "/portfolio/portrait-2.jpg",
  },

  // ==============================
  // New Vehicle Edit
  // ==============================
  {
    title: "New Vehicle Edit",
    category: "New Vehicle Edit",
    img: "/portfolio/covers/new-vehicle-edit-cover.jpg",
    video: "/portfolio/vehicle-reel-1.mp4",
  },
  {
    title: "New Vehicle Edit 02",
    category: "New Vehicle Edit",
    video: "/portfolio/vehicle-reel-2.mp4",
  },

  // ==============================
  // Pre-Wedding Edit
  // ==============================
  {
    title: "Pre-Wedding Edit",
    category: "Pre-Wedding Edit",
    img: "/portfolio/covers/prewedding-edit-cover.jpg",
    video: "/portfolio/prewedding-reel-1.mp4",
  },

  // ==============================
  // Ganapati Edit
  // ==============================
  {
    title: "Ganapati Edit",
    category: "Ganapati Edit",
    img: "/portfolio/covers/ganapati-edit-cover.jpg",
    video: "/portfolio/ganapati-reel-1.mp4",
  },

  // ==============================
  // Cricket Edit
  // ==============================
  {
    title: "Cricket Edit",
    category: "Cricket Edit",
    img: "/portfolio/covers/cricket-edit-cover.jpg",
    video: "/portfolio/cricket-reel-1.mp4",
  },

  // ==============================
  // Cinematic Edit
  // ==============================
 {
  title: "Cinematic Edit 01",
  category: "Cinematic Edit",
  img: "/portfolio/cinematic-reel-1-cover.jpg",
  video: "/portfolio/cinematic-reel-1.mp4",
},

  // ==============================
  // Poster Design
  // ==============================
  {
    title: "Poster Design",
    category: "Poster Design",
    img: "/portfolio/poster-1.jpg",
  },
  {
    title: "Poster Design 02",
    category: "Poster Design",
    img: "/portfolio/poster-2.jpg",
  },
];

  const categoryOrder = [
  "Ganapati Photography",
  "Pre-Wedding Photography",
  "Portrait Photography",
  "New Vehicle Edit",
  "Pre-Wedding Edit",
  "Ganapati Edit",
  "Cricket Edit",
  "Cinematic Edit",
  "Poster Design",
];

const filteredPortfolio = portfolioItems.filter(
  (item) => item.category === activeCategory
);

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