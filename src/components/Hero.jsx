import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[#F4B41433] blur-2xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-[#132B4F22] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-[#132B4F]/10 px-3 py-1 text-xs text-[#132B4F]">
          <span className="h-2 w-2 rounded-full bg-[#F4B414]" /> RFID • UHF • RTLS
        </span>
        <h1 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="mt-4 text-4xl md:text-6xl font-semibold text-[#132B4F]">
          RFID Intelligence for Modern Operations
        </h1>
        <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-4 max-w-2xl text-[#132B4F]/80 text-base md:text-lg">
          Divitech delivers UHF readers, antennas, tags and middleware to power real-time visibility across your enterprise.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#solutions" className="px-5 py-2.5 rounded-md bg-[#F4B414] text-[#132B4F] font-medium shadow-sm hover:brightness-95">
            Explore Solutions
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/90 backdrop-blur border border-[#132B4F]/20 text-[#132B4F] hover:bg-white">
            Talk to Us
          </a>
        </div>
        <div className="mt-8 h-1 w-48 bg-gradient-to-r from-[#F4B414] to-[#132B4F] rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
