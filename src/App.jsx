import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EmojiRain from "./components/EmojiRain";
import Gallery from "./components/Gallery";
import Final from "./components/Final";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <EmojiRain />
      <Navbar />
      <Hero />
      <About />
      <Gallery/>
      <Final />
    </div>
  );
}
