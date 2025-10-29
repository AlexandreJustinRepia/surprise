import {motion} from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
        >
          {/* Replace with your own logo (public/logo.png) */}
          <span className="text-2xl font-disney text-rose-gold">Us</span>
          {/* Fallback text logo (uncomment if no image) */}
          {/* <span className="text-2xl font-disney text-rose-gold">Us</span> */}
        </a>
      </motion.div>
    )
}

export default Logo;