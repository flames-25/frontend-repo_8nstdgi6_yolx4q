import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0d203f] text-white">
      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:py-24">
        {/* Text */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#132B4F]/60 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#F4B414]"></span>
            Trusted RFID technology partner
          </div>
          <h1 className="mt-4 font-extrabold leading-tight tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <span className="text-4xl md:text-5xl">Divitech</span>
            <br />
            <span className="text-3xl text-white/80 md:text-4xl">RFID solutions for real-world operations</span>
          </h1>
          <p className="mt-5 text-white/70 md:text-lg">
            We design and deploy end‑to‑end RFID systems for airports, logistics, warehouses, manufacturing floors, and more — delivering live visibility of assets, inventory, and critical workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="#products" className="rounded-md bg-[#F4B414] px-5 py-3 font-semibold text-[#132B4F] shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F4B414]/60">Explore Products</a>
            <a href="#contact" className="rounded-md border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">Talk to an Expert</a>
          </div>
        </div>
        {/* 3D Scene */}
        <div className="relative h-[380px] w-full max-w-[720px] flex-1 md:h-[520px]">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_40%,rgba(244,180,20,0.18),transparent_70%)]" />
        </div>
      </div>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F4B414]/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
