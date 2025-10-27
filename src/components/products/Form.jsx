import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    brand: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] sm:min-h-screen bg-white px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 w-full max-w-5xl relative"
      >
        {/* Top notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-black rounded-full"></div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-8 sm:mb-12"
        >
          Send us your Enquiry
        </motion.h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 sm:gap-8"
        >
          {/* Full Name */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your full name"
            />
          </motion.div>

          {/* Contact Number */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your contact number"
            />
          </motion.div>

          {/* Email ID */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Brand Name */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
            <label className="block mb-2 text-gray-700 font-medium text-sm sm:text-base">
              Your Brand Name
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your brand name"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white text-base sm:text-lg font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:bg-gray-900 transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
