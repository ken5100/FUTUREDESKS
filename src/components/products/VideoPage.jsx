// src/components/VideoPage.tsx
import { motion } from "framer-motion";

export default function VideoPage() {
  return (
    <section className="flex items-center justify-center bg-white px-2 min-h-[40vh] md:min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1110837145?h=3bedf43d72"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </section>
  );
}
