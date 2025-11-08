import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import TeamContact from './components/TeamContact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#132B4F] text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Products />
        <Industries />
        <TeamContact />
      </main>
      <footer className="mt-12">
        <div className="h-1 w-full bg-gradient-to-r from-[#F4B414] via-[#F4B414]/50 to-[#F4B414]" />
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-[#F4B414] ring-1 ring-black/10 shadow" />
            <span style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-lg font-semibold">Divitech</span>
          </div>
          <p style={{ fontFamily: 'gopher, sans-serif' }} className="text-sm text-white/70">© {new Date().getFullYear()} Divitech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
