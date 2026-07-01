import { motion } from "framer-motion";
import { fadeUp, slideRight, viewportOnce } from "../animations/motion";

function Booking({ formData, handleChange, handleBookingSubmit }) {
  return (
    <section id="booking" className="section booking">
      <motion.div
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p>BOOK YOUR SHOOT</p>
        <h2>Let's Create Something Amazing</h2>
      </motion.div>

      <motion.div
        className="booking-box luxury-card"
        variants={slideRight}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="Photography">Photography</option>
            <option value="Videography">Videography</option>
            <option value="Reel Editing">Reel Editing</option>
            <option value="Cricket Edit">Cricket Edit</option>
            <option value="Poster Design">Poster Design</option>
            <option value="Banner Design">Banner Design</option>
            <option value="Ganpati Shoot">Ganpati Shoot</option>
            <option value="Pre Wedding">Pre Wedding</option>
            <option value="Custom Package">Custom Package</option>
          </select>

          <input
            className="date-input"
            type="text"
            name="date"
            placeholder="Select Date"
            value={formData.date}
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={handleChange}
            required
          />

          <input
            className="full-width"
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            name="requirements"
            placeholder="Tell us about your project..."
            value={formData.requirements}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.03,
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            Book Now via WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Booking;