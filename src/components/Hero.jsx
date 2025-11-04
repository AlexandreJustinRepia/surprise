'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(247, 209, 205, 0.8) 0%, rgba(255, 248, 245, 0.8) 100%)",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Subtle shimmer overlay */}
      <motion.div
        className="absolute inset-0 opacity-25 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(247, 209, 205, 0.4), transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(247, 209, 205, 0.4), transparent 50%)",
            "radial-gradient(circle at 30% 30%, rgba(247, 209, 205, 0.4), transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-normal text-rose-700 mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Happy 2nd Anniversary!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-rose-800 font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Celebrating our love 🌸
        </motion.p>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-12"
        >
          <ChevronDown className="w-8 h-8 text-rose-600" />
        </motion.div>
      </div>
    </section>
  );
}
