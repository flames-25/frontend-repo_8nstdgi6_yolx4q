import React from 'react';
import { Plane, Boxes, Warehouse, Factory } from 'lucide-react';

const items = [
  {
    icon: Plane,
    title: 'Airports',
    desc: 'Automated baggage handling, asset tracking, and MRO with RFID-driven accuracy.'
  },
  {
    icon: Boxes,
    title: 'Logistics',
    desc: 'Hub-to-hub visibility, dock-door portals, and chain-of-custody telemetry.'
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    desc: 'Cycle counting, inventory reconciliation, and hands-free gate reads.'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'WIP tracking, Kanban automation, and line-side error-proofing.'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-3xl md:text-4xl text-[#132B4F]">Industry Implementations</h2>
            <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-2 text-[#132B4F]/70 max-w-2xl">
              Proven deployments across mission-critical environments where reliability and speed matter.
            </p>
          </div>
          <div className="hidden md:block h-1 w-40 bg-gradient-to-r from-[#F4B414] to-[#132B4F] rounded-full" />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-[#132B4F]/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-[#F4B414] text-[#132B4F] grid place-items-center group-hover:scale-105 transition-transform">
                <Icon className="size-6" />
              </div>
              <h3 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="mt-4 text-lg text-[#132B4F]">{title}</h3>
              <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-2 text-sm text-[#132B4F]/70">{desc}</p>
              <div className="mt-4 h-1 w-16 bg-[#132B4F] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
