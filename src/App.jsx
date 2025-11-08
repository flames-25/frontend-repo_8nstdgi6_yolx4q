import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import TeamContact from './components/TeamContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#081427]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Industries />
        <Products />
        <TeamContact />
        <footer className="border-t border-white/10 bg-[#0b1b36] py-8 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-white/70">
            <span>© {new Date().getFullYear()} Divitech. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
