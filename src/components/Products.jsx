import React from 'react';
import { Radio, Wifi, Scan, Server } from 'lucide-react';

const products = [
  {
    icon: Radio,
    title: 'UHF Readers',
    desc: 'High-performance fixed and handheld readers with advanced anti-collision algorithms.'
  },
  {
    icon: Wifi,
    title: 'Antennas & Portals',
    desc: 'Industrial enclosures, dock-door portals, and array antennas for coverage at scale.'
  },
  {
    icon: Scan,
    title: 'Tags & Labels',
    desc: 'On-metal, asset, and logistics tags optimized for reliability and longevity.'
  },
  {
    icon: Server,
    title: 'Middleware Platform',
    desc: 'Event processing, device orchestration, and integrations with your ERP/WMS.'
  }
];

const Products = () => {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-3xl md:text-4xl text-[#132B4F]">Products & Solutions</h2>
        <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-2 text-[#132B4F]/70 max-w-2xl">
          Hardware and software designed to capture, process, and surface item movements in real time.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-[#132B4F] text-white grid place-items-center">
                <Icon className="size-6" />
              </div>
              <h3 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="mt-4 text-lg text-[#132B4F]">{title}</h3>
              <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-2 text-sm text-[#132B4F]/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
