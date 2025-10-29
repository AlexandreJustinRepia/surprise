import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import LoveLetter from './components/LoveLetter';
import Effects from './components/Effects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Effects />
      <Navbar />
      <Hero />
      <Timeline />
      <Gallery />
      <Countdown />
      <LoveLetter />
      <Footer />
    </div>
  );
}

export default App;