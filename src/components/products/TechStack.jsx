import { motion } from "framer-motion";

export default function TechStack() {

  return (
    <section className="w-full py-16 bg-white">

      <div className="text-center mb-12">
        <span className="inline-block px-8 py-3 mb-10 text-lg text-gray-600 bg-gradient-to-b from-white to-gray-100 rounded-full border border-gray-300 shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          Tech Stack
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-gray-900">
          Built with Modern Technology for Cross-Platform

          <br className="hidden md:block" />
          Performance
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto opacity-70">
          Our grocery system is designed to run seamlessly across web, Android,
          and iOS — so your customers can order anytime, anywhere.
        </p>

      </div>


      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-[90%] max-w-5xl mx-auto"
        >

          <img
            src="/stack.webp"
            alt="Tech Stack Background"
            className="w-full object-contain"
          />


        </motion.div>
      </div>
    </section>
  );
}
