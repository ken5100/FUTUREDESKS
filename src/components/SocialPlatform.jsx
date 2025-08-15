// components/SocialPlatform.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const slides = [
  { id: 1, img: "/man-white.jpg", title: "Learning to Earning", views: "36.3K" },
  { id: 2, img: "/man-white.jpg", title: "Toh Apne Client", views: "38.7K" },
  { id: 3, img: "/man-white.jpg", title: "Meet Your New AI Team", views: "31.2K" },
  { id: 4, img: "/man-white.jpg", title: "Episode 3", views: "40.1K" },
];

export default function SocialPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 text-center">
      <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
        Social Presence
      </div>
      <h2 className="text-3xl font-bold mt-4">Trusted by 120k+ People</h2>

      <div className="mt-10 px-6">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          spaceBetween={30}
          modules={[Navigation]}
          className="max-w-[900px] mx-auto"
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide
                key={slide.id}
                className="!w-[250px] transition-all duration-300"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.85)",
                  filter: isActive ? "none" : "blur(2px)",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                    <p className="text-lg font-bold">{slide.title}</p>
                    <span className="text-sm opacity-90">{slide.views}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
