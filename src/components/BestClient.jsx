"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Play } from "lucide-react";

const clients = [
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Anubrata Das", title: "Founder, Tradescribe.in", img: "/Client.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function BestClient() {
  return (
    <section className="py-16 w-full flex flex-col items-center text-center px-6">


      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ amount: 0.3 }}
        className="px-5 py-1.5 bg-white shadow-md rounded-full text-gray-600 text-xs sm:text-sm font-medium"
      >
        Client Testimonials
      </motion.div>


      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        viewport={{ amount: 0.3 }}
        className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-[Gilroy-Medium] text-gray-900 leading-snug sm:leading-tight"
      >
        Happy Clients Testimonials
      </motion.h2>



      <div className="relative w-full mt-12 max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 14 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {clients.map((c, i) => (
            <SwiperSlide key={i} className="!flex !justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-[260px] md:w-[280px] lg:w-[300px] aspect-[9/14] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />


                <div className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center bg-black/60 rounded-full">
                  <Play size={18} className="text-white" />
                </div>


                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-semibold text-lg leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-xs opacity-85">{c.title}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>


        <div className="custom-pagination flex justify-center mt-6" />
      </div>
    </section>
  );
}
