import React from 'react';
import { Radio, Server, Wifi, Scan } from 'lucide-react';

const products = [
  {
    icon: Radio,
    title: 'UHF RFID Readers',
    desc: 'Fixed and handheld readers with PoE, GPIO, and advanced filtering for high-density tag environments.'
  },
  {
    icon: Wifi,
    title: 'Antennas & Portals',
    desc: 'Industrial-grade antennas, gates, and tunnels engineered for dock doors, conveyors, and choke points.'
  },
  {
    icon: Scan,
    title: 'Tags & Labels',
    desc: 'Asset, on-metal, garment, and logistics labels with encoding services and print/verify workflows.'
  },
  {
    icon: Server,
    title: 'Middleware & Platform',
    desc: 'Edge filtering, EPC translation, device orchestration, and APIs for WMS/ERP integrations.'
  }
];

const Products = () => {
  return (
    <section id="products" className="bg-[#09172d] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Products & Solutions</h2>
            <p className="mt-2 max-w-2xl text-white/70">Hardware, software, and services to deliver reliable RFID data from edge to cloud.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, desc }) => (
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

export default Products;
