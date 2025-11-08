import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden bg-[#132B4F]">
      {/* Background cover image as per system instruction */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center"
          alt="Blue to purple abstract gradient background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Spline layer (kept for interactive depth) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft accent glows, do not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[#F4B41433] blur-2xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs">
          <span className="h-2 w-2 rounded-full bg-[#F4B414]" /> RFID • UHF • RTLS
        </span>
        <h1 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="mt-4 text-4xl md:text-6xl font-semibold">
          RFID Intelligence for Modern Operations
        </h1>
        <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-4 max-w-2xl text-white/80 text-base md:text-lg">
          Divitech delivers UHF readers, antennas, tags and middleware to power real-time visibility across your enterprise.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#solutions" className="px-5 py-2.5 rounded-md bg-[#F4B414] text-[#132B4F] font-medium shadow-sm hover:brightness-95">
            Explore Solutions
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/15 backdrop-blur border border-white/20 text-white hover:bg-white/20">
            Talk to Us
          </a>
        </div>
        <div className="mt-8 h-1 w-48 bg-gradient-to-r from-[#F4B414] to-white/60 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
