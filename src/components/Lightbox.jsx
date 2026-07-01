import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({
  selectedImage,
  setSelectedImage,
  nextImage,
  prevImage,
  currentIndex,
  totalImages,
}) {
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, nextImage, prevImage, setSelectedImage]);

  if (!selectedImage) return null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50) nextImage();
    if (difference < -50) prevImage();

    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="premium-lightbox"
        onClick={() => setSelectedImage(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="premium-lightbox-blur"></div>

        <div className="premium-lightbox-top">
          <span className="gallery-icon">▦</span>
          <h4>{selectedImage.title}</h4>
          <span></span>
          <p>
            {currentIndex + 1} / {totalImages}
          </p>
        </div>

        <button
          className="premium-close"
          onClick={() => setSelectedImage(null)}
        >
          ×
        </button>

        <button
          className="premium-nav premium-prev"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
        >
          ❮
        </button>

        <motion.div
          className="premium-lightbox-content"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          initial={{ scale: 0.88, opacity: 0, y: 35 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 35 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="premium-image-frame">
            <img src={selectedImage.img} alt={selectedImage.title} />
          </div>

          <h3>{selectedImage.title}</h3>

          <div className="premium-title-line"></div>

          <p className="premium-counter">
            {currentIndex + 1} / {totalImages}
          </p>
        </motion.div>

        <button
          className="premium-nav premium-next"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
          ❯
        </button>

        <div className="premium-lightbox-hints">
          <span>ESC to close</span>
          <span>Swipe or use arrows</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;