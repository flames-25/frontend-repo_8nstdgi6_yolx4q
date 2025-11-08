import React from 'react';
import { Plane, Boxes, Warehouse, Factory } from 'lucide-react';

const industries = [
  {
    icon: Plane,
    title: 'Airports & Aviation',
    desc: 'RFID for baggage reconciliation, cargo tracking, ground equipment, and tool control with IATA/ICAO alignment.'
  },
  {
    icon: Boxes,
    title: 'Logistics & Supply Chain',
    desc: 'Cross-dock verification, pallet/container visibility, yard management, and cold-chain condition monitoring.'
  },
  {
    icon: Warehouse,
    title: 'Inventory & Warehousing',
    desc: 'Cycle counting, putaway, picking, and real-time location of SKUs with portals, tunnels, and handhelds.'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Work-in-process tracking, Kanban, returnable transport items (RTI), tools, and asset lifecycle traceability.'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="bg-[#0d203f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Industry Implementations</h2>
            <p className="mt-2 max-w-2xl text-white/70">Purpose-built deployments delivering measurable ROI across operations.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#132B4F] text-[#F4B414]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
