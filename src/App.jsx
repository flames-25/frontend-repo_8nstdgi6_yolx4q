import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import TeamContact from './components/TeamContact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#132B4F]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Products />
        <Industries />
        <TeamContact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#F4B414]" />
            <span style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-lg">Divitech</span>
          </div>
          <p style={{ fontFamily: 'gopher, sans-serif' }} className="text-sm text-[#132B4F]/70">© {new Date().getFullYear()} Divitech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
