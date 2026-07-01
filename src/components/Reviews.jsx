import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import { fadeUp, slideLeft, viewportOnce } from "../animations/motion";

function Reviews() {
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: 5,
    message: "",
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;

    setReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your review has been submitted.");
  };

  return (
    <section id="reviews" className="section reviews">
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
        <p>CLIENT REVIEWS</p>
        <h2>Share Your Experience</h2>
      </motion.div>

      <motion.form
        className="review-form booking-style-review"
        onSubmit={handleReviewSubmit}
        variants={slideLeft}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={reviewData.name}
          onChange={handleReviewChange}
          required
        />

        <div className="rating-box">
          <p>Your Rating</p>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                className={star <= reviewData.rating ? "star active" : "star"}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setReviewData((prev) => ({
                    ...prev,
                    rating: star,
                  }))
                }
              >
                <FaStar />
              </motion.button>
            ))}
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Write your review"
          value={reviewData.message}
          onChange={handleReviewChange}
          required
        />

        <motion.button
          type="submit"
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
        >
          Submit Review
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Reviews;