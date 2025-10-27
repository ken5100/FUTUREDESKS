"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../lib/sanityClient";

export default function SocialPlatform() {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    client
      .fetch(`*[_type == "swiper"]{
        _id,
        title,
        caption,
        views,
        "imageUrl": image.asset->url
      }`)
      .then(setPosts)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!posts.length) return null;

  const prev = () => setActive((s) => (s - 1 + posts.length) % posts.length);
  const next = () => setActive((s) => (s + 1) % posts.length);

  const getIndex = (offset) => (active + offset + posts.length) % posts.length;

  return (
    <section className="py-16 text-center w-full" style={{
            fontFamily : "Matter"
          }}>
      <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
        Social Presence
      </div>

      <h2 className="text-3xl mt-4">Trusted by 120k+ People</h2>

      <div className="mt-10 px-4 sm:px-8">
        <div className="relative w-full mx-auto flex items-center justify-center overflow-hidden">
          
          {!isMobile && (
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/90 rounded-full shadow-md hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12l6-6"
                  stroke="#111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

        
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
            {isMobile
              ? [0].map((offset) => {
                  const idx = getIndex(offset);
                  const p = posts[idx];
                  return (
                    <motion.div
                      key={p._id}
                      className="relative overflow-hidden rounded-2xl shadow-xl"
                      style={{ width: "70vw", height: "390px", zIndex: 40 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      animate={{ x: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      onDragEnd={(_, info) => {
                        const threshold = 80;
                        const velocity = info.velocity.x;

                        if (info.offset.x > threshold || velocity > 500) {
                          prev();
                        } else if (info.offset.x < -threshold || velocity < -500) {
                          next();
                        }
                      }}
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 text-white drop-shadow-lg text-left">
                        <p className="text-lg font-bold">{p.title}</p>
                        <span className="text-sm opacity-90 block">
                          {p.caption}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white text-sm font-medium drop-shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="12" r="3" fill="white" />
                        </svg>
                        <span>{p.views}</span>
                      </div>
                    </motion.div>
                  );
                })
              : [-2, -1, 0, 1, 2].map((offset) => {
                  const idx = getIndex(offset);
                  const p = posts[idx];
                  const isActive = offset === 0;
                  const distance = Math.abs(offset);

                  const scale = distance === 0 ? 1 : distance === 1 ? 0.85 : 0.75;
                  const blur = distance === 0 ? 0 : distance === 1 ? 3 : 5;
                  const opacity =
                    distance === 0 ? 1 : distance === 1 ? 0.75 : 0.55;
                  const z = distance === 0 ? 40 : distance === 1 ? 20 : 10;

                  const width = isActive
                    ? "260px"
                    : distance === 1
                    ? "220px"
                    : "180px";
                  const height = isActive
                    ? "390px"
                    : distance === 1
                    ? "300px"
                    : "250px";

                  return (
                    <motion.div
                      key={p._id}
                      className="relative overflow-hidden rounded-2xl shadow-xl"
                      animate={{ scale, filter: `blur(${blur}px)`, opacity }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                      style={{ width, height, zIndex: z }}
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {isActive && (
                        <div className="absolute bottom-5 left-5 text-white drop-shadow-lg text-left">
                          <p className="text-lg font-bold">{p.title}</p>
                          <span className="text-sm opacity-90 block">
                            {p.caption}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
          </div>

         
          {!isMobile && (
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/90 rounded-full shadow-md hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
