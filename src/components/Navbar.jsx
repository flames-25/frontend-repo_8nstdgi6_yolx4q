import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1b36]/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#F4B414] text-[#132B4F] font-black">D</div>
          <span className="text-white font-semibold">Divitech</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#industries">Industries</a>
          <a className="hover:text-white" href="#products">Products</a>
          <a className="hover:text-white" href="#team">Experts</a>
          <a className="rounded-md bg-[#F4B414] px-3 py-2 font-semibold text-[#132B4F] hover:brightness-95" href="#contact">Contact</a>
        </nav>
        <a className="md:hidden rounded-md bg-[#F4B414] px-3 py-2 font-semibold text-[#132B4F]" href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
