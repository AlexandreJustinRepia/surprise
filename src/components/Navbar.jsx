import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Trigger entrance animations only once on mount
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={hasMounted ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-rose-50/95 backdrop-blur-sm shadow-sm"
    >
      <div className="flex items-center justify-between px-6 h-full md:px-12">
        
        {/* Logo: Scale + Fade */}
        <motion.a
          href="/"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={hasMounted ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-baseline -space-x-1"
        >
          <span
            className="text-[36px] font-normal text-rose-700"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            A
          </span>
          <span
            className="text-[36px] font-normal bg-gradient-to-br from-pink-700 to-rose-800 bg-clip-text text-transparent -ml-3"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            J
          </span>
          <span
            className="text-[36px] font-normal text-pink-800"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            M
          </span>
        </motion.a>

        {/* Desktop Nav – Staggered Slide In */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ x: -30, opacity: 0 }}
              animate={hasMounted ? { x: 0, opacity: 1 } : {}}
              transition={{
                delay: 0.3 + i * 0.15, // 0.3s base + 0.15s stagger
                duration: 0.4,
                ease: "easeOut",
              }}
              className="group relative text-rose-900 hover:text-rose-600 text-lg font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {link.label}
              {/* Underline: expands on hover */}
              <span className="absolute bottom-[-6px] left-1/2 h-0.5 w-0 bg-rose-500 transition-all duration-200 ease-out group-hover:w-full group-hover:left-0" />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-rose-900 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav – Slide Down */}
      <motion.nav
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-rose-50/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-rose-900 hover:text-rose-600 text-lg font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}