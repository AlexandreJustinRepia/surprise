'use client';

import { motion } from "framer-motion";
import { useState } from "react";

// Emoji rain & click burst (global)
const rainEmojis = ["🌸", "❤️", "✨", "🍃", "🌹", "💞"];
const clickEmojis = ["❤️", "🌸", "✨", "🍃", "🌷", "💖", "⭐", "💞", "🌻"];

export default function EmojiRain() {
  const [clicks, setClicks] = useState([]);

  // Randomly position raining emojis
  const rainItems = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    emoji: rainEmojis[i % rainEmojis.length],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 6 + Math.random() * 5,
    size: `${1 + Math.random() * 1.5}rem`,
  }));

  // Handle emoji bursts on click
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const burst = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 80,
      y: y + (Math.random() - 0.5) * 80,
      emoji: clickEmojis[Math.floor(Math.random() * clickEmojis.length)],
    }));

    setClicks((prev) => [...prev, ...burst]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => !burst.some((b) => b.id === c.id)));
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 pointer-events-auto z-0"
      onClick={handleClick}
    >
      {/* Falling emojis */}
      {rainItems.map((item) => (
        <motion.span
          key={item.id}
          className="absolute drop-shadow-md"
          initial={{ y: -100 }}
          animate={{ y: "110vh", x: [0, 20, -20, 0], rotate: [0, 360] }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: item.left,
            fontSize: item.size,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Click burst emojis */}
      {clicks.map((item) => (
        <motion.span
          key={item.id}
          className="absolute text-2xl drop-shadow-md pointer-events-none"
          initial={{ scale: 0, opacity: 1, x: item.x, y: item.y }}
          animate={{
            scale: [0, 1.3, 1],
            opacity: [1, 1, 0],
            y: item.y - 80,
          }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
