// components/SocialPlatform.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { client } from "../lib/sanityClient";

export default function SocialPlatform() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch posts from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "swiper"]{
        _id,
        title,
        caption,
        "imageUrl": image.asset->url
      }`)
      .then(setPosts)
      .catch(console.error);
  }, []);

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
          {posts.map((post, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide
                key={post._id}
                className="!w-[250px] transition-all duration-300"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.85)",
                  filter: isActive ? "none" : "blur(2px)",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                    <p className="text-lg font-bold">{post.title}</p>
                    <span className="text-sm opacity-90">{post.caption}</span>
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
