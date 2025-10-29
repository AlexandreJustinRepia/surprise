import React from 'react';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-pink/30 to-white">
      <div className="absolute inset-0 bg-[url('/snowflakes.png')] opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-6xl md:text-8xl font-romantic text-rose-gold mb-4 shimmer">
          Happy 2nd Anniversary
        </h1>
        <p className="text-xl md:text-2xl text-warm-brown font-body max-w-2xl mx-auto">
          In our enchanted forest of love, every moment with you is pure magic.
        </p>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-8 inline-block"
        >
          <span className="text-6xl">Heart</span>
        </motion.div>
      </motion.div>

      <ReactAudioPlayer
        src="/assets/music/anniversary-piano.mp3"
        autoPlay
        loop
        volume={0.3}
        className="hidden"
      />
    </section>
  );
};

export default Hero;