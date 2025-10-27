import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle"; 

const cards = [
  {
    img: "/card1.webp",
    title: "Seller Panel",
    desc: "A dedicated dashboard for store owners to manage inventory, stock, and customer orders.",
  },
  {
    img: "/card2.webp",
    title: "Admin Panel",
    desc: "A powerful control center for managing your grocery business with reports and insights.",
  },
  {
    img: "/card3.webp",
    title: "User Application",
    desc: "A mobile app for customers to browse, order, pay securely, and track deliveries.",
  },
  {
    img: "/card4.webp",
    title: "Customer Website",
    desc: "A responsive website where users can shop from any browser without downloading.",
  },
  {
    img: "/card5.webp",
    title: "Analytics Dashboard",
    desc: "Track sales, growth, and performance with detailed analytics & reports.",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full py-16 bg-white">
     
      <div className="text-center mb-12">
       
        <span className="inline-block px-8 py-2 mb-10 text-lg text-gray-500 bg-gradient-to-b from-white to-gray-100 rounded-full border border-gray-300 shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          Offering
        </span>

       
        <h2 className="text-4xl md:text-5xl text-gray-900">
          What All We Offer
        </h2>

       
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto opacity-50">
          Our software comes with everything you need to start selling groceries online — 
          whether you’re a single store or a chain of marts.
        </p>
      </div>

  
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full px-6"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
               p-4 sm:p-6 flex flex-col items-center text-center h-full 
               min-h-[360px] sm:min-h-[420px] 
               max-w-[280px] sm:max-w-[320px] lg:max-w-[320px] mx-auto"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 sm:h-48 object-contain mb-4 sm:mb-6"
                />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 flex-grow">
                  {card.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <style>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2.5rem;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #6b7280; /* Tailwind gray-500 */
          transition: color 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #374151; /* Tailwind gray-700 */
        }
      `}</style>
    </section>
  );
}
