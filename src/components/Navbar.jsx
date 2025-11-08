import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2341]/70 backdrop-blur-md border-b border-white/10 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#F4B414] to-[#F4B414]/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-15 md:h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-[#F4B414] shadow-sm ring-1 ring-black/10" />
          <span style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-xl font-semibold group-hover:opacity-90">
            Divitech
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a>
          <a href="#industries" className="text-white/80 hover:text-white transition-colors">Industries</a>
          <a href="#team" className="text-white/80 hover:text-white transition-colors">Team</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-[#F4B414] text-[#132B4F] font-medium shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white/30">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
