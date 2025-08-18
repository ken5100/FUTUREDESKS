import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play } from "lucide-react";

// Editable client profiles
const clients = [
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
  { name: "Client", title: "Founder, Tradescribe.in", img: "/Client.png" },
];

export default function BestClient() {
  return (
    <section className="py-16">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
          Client Testimonials
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
          Happy Clients Testimonials
        </h2>
      </div>

      {/* Portrait slider */}
      <div className="max-w-6xl mx-auto px-4">
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={10}
  loop
  centeredSlides={true}
  navigation
  pagination={{
    clickable: true,
    el: ".swiper-pagination-custom", // explicitly bind
  }}
  autoplay={{ delay: 2800, disableOnInteraction: false }}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2.1, spaceBetween: 10 },
    1024: { slidesPerView: 3.1, spaceBetween: 10 },
  }}
>
  {clients.map((c, i) => (
    <SwiperSlide key={i} className="!flex !justify-center">
      <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] aspect-[9/15] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
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
          <h3 className="font-semibold text-lg leading-tight">{c.name}</h3>
          <p className="text-xs opacity-85">{c.title}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Pagination BELOW slider */}
<div className="swiper-pagination-custom flex justify-center mt-6" />





      </div>
    </section>
  );
}
