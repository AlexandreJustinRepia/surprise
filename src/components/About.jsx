'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Split message into lines for staggered animation
const messageLines = [
  "JM, you’ve always been my strength — in every way that matters.",
  "You’re not just strong; you’re gentle, patient, and full of heart.",
  "You never stopped believing in me, even when I doubted myself.",
  "You stood by me when things got hard,",
  "and your quiet strength became my safe place.",
  "I wouldn’t be where I am today if it wasn’t for you.",
  "Thank you for lifting me up, for loving me through every storm,",
  "and for reminding me that I can always rise again.",
  "No matter what disaster or challenge comes our way,",
  "we’ll face it hand in hand —",
  "until we finally reach the peace we’ve always dreamed of,",
  "the one we’ve built together.",
  "You’re my home, my calm, my forever. heart",
  "",
  "— Always with love,",
  "AJ",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
        id="about"
        ref={ref}
        className="relative flex flex-col justify-center min-h-screen py-24 px-6 md:px-12 "
        style={{
        background: "linear-gradient(to bottom, rgba(255, 248, 245, 0.9) 0%, rgba(247, 209, 205, 0.9) 100%)",
        }}
    >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Letter */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Heading */}
            <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-normal text-rose-700 mb-8"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            >
            My Strongest Heart
            </motion.h2>

            {/* Message Lines */}
            <div className="space-y-3 text-lg leading-relaxed">
            {messageLines.map((line, i) => {
                if (line === "") return <br key={i} />;
                if (line.startsWith("—")) {
                return (
                    <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-rose-700 font-medium italic"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                    {line}
                    </motion.p>
                );
                }
                if (line.includes("AJ")) {
                return (
                    <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-rose-700 font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                    {line}
                    </motion.p>
                );
                }
                return (
                <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-[#5A3E3E]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    {line}
                </motion.p>
                );
            })}
            </div>
        </motion.div>

        {/* Right: Video Placeholder */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
        >
            <video
                src="/videos/Vid_1.mp4" // 🎬 put your actual video path here
                className="w-full h-96 object-cover rounded-xl shadow-lg pointer-events-none"
                loop
                muted
                playsInline
            />
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{ boxShadow: "0 0 30px rgba(255, 105, 180, 0.2)" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
        </div>
    </section>
  );
}