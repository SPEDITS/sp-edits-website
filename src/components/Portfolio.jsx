import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "../animations/motion";

function Portfolio({
  activeCategory,
  setActiveCategory,
  filteredPortfolio,
  setSelectedImage,
}) {
 
 const categories = [
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

  const handleVideoPlay = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();
  };

  const handleVideoStop = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="portfolio" className="section portfolio">
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
        <p>PORTFOLIO</p>
        <h2>Featured Work</h2>
      </motion.div>

      <motion.div
        className="portfolio-filters"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="portfolio-grid">
        <AnimatePresence mode="wait">
          {filteredPortfolio.map((item) => (
            <motion.div
              className="portfolio-item cinematic-card luxury-card premium-img"
              onClick={() => setSelectedImage(item)}
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onMouseEnter={handleVideoPlay}
              onMouseLeave={handleVideoStop}
            >
              {item.video ? (
                <video
                  className="portfolio-preview-video"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={item.img}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  className="portfolio-image"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="portfolio-overlay"></div>
              <div className="portfolio-badge">{item.category}</div>

              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>
                  View Project <span>→</span>
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;