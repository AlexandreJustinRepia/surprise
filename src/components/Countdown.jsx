import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2025-11-01').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTime({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / (1000 * 60)) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-gradient-to-r from-rose-gold/10 to-gold/10">
      <h2 className="text-5xl font-romantic text-center text-rose-gold mb-12">Until Our Next Chapter</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {Object.entries(time).map(([unit, value]) => (
          <div key={unit} className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg text-center min-w-[100px]">
            <div className="text-4xl font-bold text-rose-gold">{value}</div>
            <div className="text-sm text-warm-brown uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;