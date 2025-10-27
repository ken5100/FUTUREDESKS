import { motion } from "framer-motion";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function HeroSection() {
  const people = [
    {
      id: 1,
      name: "Rohit",
      designation: "Founder @FutureDesks",
      image: "/prof1.png",
    },
    {
      id: 2,
      name: "Ananya",
      designation: "Tech Lead",
      image: "/prof2.png",
    },
    {
      id: 3,
      name: "Karan",
      designation: "Client Success",
      image: "/prof3.png",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-14 sm:py-20 px-4 sm:px-6">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug sm:leading-tight font-semibold"
      >
        Launch Your Own Online <br />
        <span className="text-black">Grocery Store</span>
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-2xl opacity-80"
      >
        Build your very own online grocery store or multi-vendor grocery
        marketplace with{" "}
        <span className="font-semibold text-gray-500">Future Desks’</span>{" "}
        complete source code and post-purchase support.
      </motion.p>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-5 sm:mt-6 text-base sm:text-lg md:text-2xl text-gray-400 opacity-80"
      >
        Software worth Lakhs at just{" "}
        <span className="font-bold text-black text-2xl sm:text-3xl md:text-4xl opacity-100">
          Rs.50,000/-
        </span>
      </motion.p>


      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.08,
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "2px solid #000000",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 sm:mt-10 px-10 py-4 rounded-full bg-black text-white text-lg sm:text-xl font-semibold shadow-lg"
      >
        Get this Software
      </motion.button>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 flex items-center gap-5"
      >

        <div className="flex items-center -space-x-2 [&_img]:w-8 [&_img]:h-8 sm:[&_img]:w-10 sm:[&_img]:h-10">
          <AnimatedTooltip items={people} />
        </div>


        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Trusted by{" "}
          <span className="text-blue-600 font-semibold">100+ Clients</span>
        </p>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 sm:mt-10 relative z-10"
      >
        <div className="relative w-[240px] sm:w-[300px] md:w-[350px] overflow-hidden">
          <img src="/phone.gif" alt="Mobile Demo" className="w-full" />
        </div>
      </motion.div>
    </section>
  );
}
