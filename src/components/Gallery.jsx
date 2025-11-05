'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 🌸 Floating decorative items (optional – can be removed if not needed)
const decorItems = [
  { top: "10%", left: "5%" },
  { top: "60%", left: "90%" },
  { top: "80%", left: "20%" },
  { top: "30%", left: "70%" },
];

// 🖼️ Sample photo URLs (replace with yours)
const photos = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  url: `/images/${i + 1}.jpeg`,
}));

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 248, 245, 0.9) 0%, rgba(247, 209, 205, 0.9) 100%)",
      }}
    >
      {/* Optional Floating Decorations */}
      {decorItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 md:w-16 md:h-16 opacity-20 pointer-events-none"
          initial={{ y: -100, rotate: 0 }}
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: item.top, left: item.left }}
        >
          <span className="text-4xl md:text-5xl">🌸</span>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-normal text-[#B76E79] mb-12 sm:mb-16"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "0.02em",
          }}
        >
          Every Moment With You
        </motion.h2>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              whileTap={{ scale: 0.98 }} // Touch feedback
            >
              <div className="aspect-[4/5] w-full">
                <img
                  src={photo.url}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/423x500/F7D1CD/B76E79?text=Memory+${i + 1}`;
                  }}
                />
              </div>

              {/* Glow effect on hover/tap */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-hover:ring-rose-300/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Outro Text – Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 sm:mt-20 text-center text-lg sm:text-xl md:text-2xl text-[#B76E79] font-light italic leading-relaxed px-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <TypewriterText
            text="These moments are pieces of us — and there’s still so much more to create together. 💖"
            delay={1.8}
            isInView={isInView}
          />
        </motion.p>
      </div>
    </section>
  );
}

// 💫 Typewriter Component (Responsive & Smooth)
function TypewriterText({ text, delay, isInView }) {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.08, duration: 0.3 }}
          className="inline-block mr-1.5 sm:mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}