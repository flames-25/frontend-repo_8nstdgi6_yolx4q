import React from 'react';
import { Mail, Phone, MapPin, Linkedin, User } from 'lucide-react';

const experts = [
  { name: 'Alya Pratama', role: 'RFID Solutions Architect', avatar: null, linkedin: '#' },
  { name: 'Rizky Mahendra', role: 'Field Engineering Lead', avatar: null, linkedin: '#' },
  { name: 'Nadia Putri', role: 'Project Manager', avatar: null, linkedin: '#' },
];

const TeamContact = () => {
  return (
    <section id="team" className="bg-[#0d203f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold md:text-3xl">Meet the Experts</h2>
          <p className="mt-2 max-w-2xl text-white/70">Our team brings deep experience in RFID hardware, middleware, and enterprise integrations.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {experts.map((e) => (
            <div key={e.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#132B4F] text-[#F4B414]">
                  <User size={20} />
                </div>
                <div>
                  <div className="font-semibold">{e.name}</div>
                  <div className="text-sm text-white/70">{e.role}</div>
                </div>
              </div>
              <a href={e.linkedin} className="mt-4 inline-flex items-center gap-2 text-sm text-[#F4B414] hover:underline">
                <Linkedin size={16} /> Connect
              </a>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6">
          <h3 className="text-xl font-semibold">Contact Divitech</h3>
          <p className="mt-2 max-w-2xl text-white/70">Tell us about your processes and objectives—our engineers will propose the right RFID architecture for your environment.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:border-[#F4B414] focus:outline-none" placeholder="Full name" />
            <input type="email" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:border-[#F4B414] focus:outline-none" placeholder="Work email" />
            <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:border-[#F4B414] focus:outline-none" placeholder="Company" />
            <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:border-[#F4B414] focus:outline-none" placeholder="Phone" />
            <textarea className="md:col-span-2 h-28 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:border-[#F4B414] focus:outline-none" placeholder="Project brief"></textarea>
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <span className="inline-flex items-center gap-2"><Mail size={16}/> sales@divitech.com</span>
                <span className="inline-flex items-center gap-2"><Phone size={16}/> +1 (555) 123‑4567</span>
                <span className="inline-flex items-center gap-2"><MapPin size={16}/> Worldwide</span>
              </div>
              <button type="button" className="rounded-md bg-[#F4B414] px-5 py-2 font-semibold text-[#132B4F] hover:brightness-95">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
