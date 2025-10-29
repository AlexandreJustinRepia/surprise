import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { date: 'Nov 1, 2023', title: 'First Date', desc: 'Snowy walk in the park', icon: 'Snowflake' },
  { date: 'Dec 25, 2023', title: 'First Christmas', desc: 'Under the tree with hot cocoa', icon: 'Christmas Tree' },
  { date: 'Jun 15, 2024', title: 'Disney Trip', desc: 'Castle fireworks & wishes', icon: 'Castle' },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-soft-pink/20">
      <h2 className="text-5xl font-romantic text-center text-rose-gold mb-16">Our Magical Journey</h2>
      <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
        <div className="flex gap-8 md:gap-12">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="min-w-[280px] bg-white rounded-2xl shadow-lg p-6 text-center border border-rose-gold/20"
            >
              <div className="text-4xl mb-3">{e.icon}</div>
              <h3 className="text-xl font-semibold text-rose-gold">{e.title}</h3>
              <p className="text-sm text-warm-brown">{e.date}</p>
              <p className="mt-2 text-warm-brown/80">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;