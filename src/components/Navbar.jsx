import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[#F4B414]" />
          <span style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-xl font-semibold text-[#132B4F]">
            Divitech
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#solutions" className="text-[#132B4F]/80 hover:text-[#132B4F] transition-colors">Solutions</a>
          <a href="#industries" className="text-[#132B4F]/80 hover:text-[#132B4F] transition-colors">Industries</a>
          <a href="#team" className="text-[#132B4F]/80 hover:text-[#132B4F] transition-colors">Team</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-[#F4B414] text-[#132B4F] font-medium hover:brightness-95">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
