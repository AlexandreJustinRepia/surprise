'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import videoFile from "../../public/videos/VID_2.mp4";

const messageLines = [
  "Every song, every laugh, every small moment",
  "they all led us here.",
  "You’ve been my comfort, my courage, my home.",
  "This is for you, my love",
  "our story, our laughter, our forever. heart",
];

export default function Final() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false); // NEW
  const videoRef = useRef(null);
  const heartRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setTimeout(() => setShowOverlay(true), 2000);
    }
  };
  

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // When video ends → trigger final message
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowFinalMessage(true);

    // Delay the scroll so the heart renders first
    setTimeout(() => {
      heartRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 800);
  };

  return (
    <section
      ref={ref}
      id="favorites"
      className="relative flex flex-col justify-center min-h-screen py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F7D1CD 0%, #FFF8F5 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-normal text-[#B76E79] mb-8"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Forever Moment
        </motion.h2>

        {/* Message Lines */}
        <div className="space-y-4 mb-16">
          {messageLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.2,
                ease: "easeOut",
              }}
              className="text-lg md:text-xl text-[#5A3E3E] leading-relaxed"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "160%",
                letterSpacing: "0.02em",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="bg-gray-200 border-2 border-dashed rounded-3xl w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={videoFile}
              className="w-full h-full object-cover rounded-3xl"
              onEnded={handleVideoEnd} // ← Trigger final message
            />

            {/* Play Button */}
            {!isPlaying && !showFinalMessage && (
              <motion.button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-3xl"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-white/90 p-6 rounded-full shadow-xl"
                >
                  <Play className="w-12 h-12 text-rose-600 fill-rose-600" />
                </motion.div>
              </motion.button>
            )}

            {/* Pause Button */}
            {isPlaying && (
              <button
                onClick={handlePause}
                className="absolute top-4 right-4 bg-white/80 p-3 rounded-full shadow-lg"
              >
                <Pause className="w-6 h-6 text-rose-700" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Post-Play Overlay Message */}
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p
              className="text-2xl md:text-3xl text-[#C78888] font-medium italic"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              “No matter where life takes us,<br />
              I’ll always choose you — in every lifetime.”
            </p>
          </motion.div>
        )}

        {/* FINAL POP-UP AFTER VIDEO ENDS */}
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "backOut",
              delay: 0.3,
            }}
            className="mt-20 flex flex-col items-center"
            ref={heartRef} // 💖 Focus target
          >
            {/* Glowing Heart */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                textShadow: [
                  "0 0 20px #FECDD3",
                  "0 0 50px #FECDD3",
                  "0 0 20px #FECDD3",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl mb-6 text-rose-600 select-none"
            >
              ❤️
            </motion.div>

            {/* Main Message */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-rose-700"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Happy 2nd Anniversary
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-4 text-xl text-rose-600 italic"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              I love you, JM ❤️
            </motion.p>

            {/* Confetti Sparkles */}
            <ConfettiBurst />
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Confetti Burst Component
function ConfettiBurst() {
  const emojis = ["❤️", "💖", "🌸", "✨", "🌹", "💞", "💘", "⭐"];
  return (
    <>
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl pointer-events-none"
          initial={{
            x: Math.random() * 600 - 300,
            y: -100,
            opacity: 1,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [null, 300],
            opacity: [1, 0],
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </>
  );
}