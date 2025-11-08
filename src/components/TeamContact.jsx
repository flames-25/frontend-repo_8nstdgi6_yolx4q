import React from 'react';
import { Mail, Phone, MapPin, Linkedin, User } from 'lucide-react';

const team = [
  { name: 'Aisha Rahman', role: 'RFID Solutions Architect', linkedin: '#' },
  { name: 'Kenji Sato', role: 'Hardware Engineering Lead', linkedin: '#' },
  { name: 'Laura Mendes', role: 'Implementation Manager', linkedin: '#' },
  { name: 'Tariq Hassan', role: 'Software Platform Lead', linkedin: '#' },
];

const TeamContact = () => {
  return (
    <section id="team" className="py-20 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-3xl md:text-4xl text-[#132B4F]">Meet the Experts</h2>
          <p style={{ fontFamily: 'gopher, sans-serif' }} className="mt-2 text-[#132B4F]/70">Experienced engineers and consultants delivering end-to-end RFID success.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="group rounded-xl border border-[#132B4F]/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-[#132B4F] text-white grid place-items-center group-hover:scale-105 transition-transform">
                <User className="size-6" />
              </div>
              <h3 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="mt-4 text-lg text-[#132B4F]">{m.name}</h3>
              <p style={{ fontFamily: 'gopher, sans-serif' }} className="text-sm text-[#132B4F]/70">{m.role}</p>
              <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-[#132B4F]">
                <Linkedin className="size-4" /> Connect
              </a>
              <div className="mt-4 h-1 w-12 bg-[#F4B414] rounded-full" />
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[#132B4F]/10 bg-white p-6 shadow-sm">
            <h3 style={{ fontFamily: 'roc-grotesk, sans-serif' }} className="text-xl text-[#132B4F]">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-[#132B4F]/80">
              <p className="flex items-center gap-2"><Mail className="size-4 text-[#F4B414]" /> hello@divitech.com</p>
              <p className="flex items-center gap-2"><Phone className="size-4 text-[#F4B414]" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><MapPin className="size-4 text-[#F4B414]" /> Singapore • Dubai • London</p>
            </div>
          </div>
          <form className="lg:col-span-2 rounded-xl border border-[#132B4F]/10 bg-white p-6 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#132B4F]/70">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-[#132B4F]/20 bg-white px-3 py-2 outline-none focus:border-[#132B4F]" placeholder="Jane Cooper" />
              </div>
              <div>
                <label className="block text-sm text-[#132B4F]/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-[#132B4F]/20 bg-white px-3 py-2 outline-none focus:border-[#132B4F]" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#132B4F]/70">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-[#132B4F]/20 bg-white px-3 py-2 outline-none focus:border-[#132B4F]" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[#F4B414] px-5 py-2.5 text-[#132B4F] font-medium shadow-sm hover:brightness-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
