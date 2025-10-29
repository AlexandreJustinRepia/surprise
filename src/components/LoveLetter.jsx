import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-soft-pink/30 p-12 rounded-3xl border-4 border-dashed border-rose-gold/50"
        >
          <p className="text-2xl italic text-warm-brown font-body leading-relaxed">
            "Every day with you feels like a page from our own fairytale. Thank you for being my forever."
          </p>
          <p className="mt-8 text-3xl font-romantic text-rose-gold">— With all my love</p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;