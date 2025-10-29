import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  '/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-soft-pink/30">
      <h2 className="text-5xl font-romantic text-center text-rose-gold mb-16">Our Memories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative group cursor-pointer"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg rotate-[-3deg] group-hover:rotate-0 transition-transform">
              <img src={src} alt="" className="w-full h-48 object-cover rounded" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;