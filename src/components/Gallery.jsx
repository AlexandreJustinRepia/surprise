'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 🌸 Floating decorative items (example)
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
      className="relative flex flex-col justify-center min-h-screen py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 248, 245, 0.9) 0%, rgba(247, 209, 205, 0.9) 100%)",
      }}
    >

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl md:text-6xl font-normal text-[#B76E79] mb-16"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "0.02em",
          }}
        >
          Every Moment With You
        </motion.h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="aspect-[423/500] w-full">
                <img
                  src={photo.url}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />
              </div>
              {/* Soft glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-hover:ring-rose-300/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Outro Text – Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-center text-xl md:text-2xl text-[#B76E79] font-light italic leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <TypewriterText
            text="These moments are pieces of us — and there’s still so much more to create together. 💖"
            delay={1.5}
            isInView={isInView}
          />
        </motion.p>
      </div>
    </section>
  );
}

// 💫 Typewriter Component (React version)
function TypewriterText({ text, delay, isInView }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.08, duration: 0.3 }}
          className="inline"
          style={{ marginRight: "0.35rem" }} // 👈 adds spacing between words
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}