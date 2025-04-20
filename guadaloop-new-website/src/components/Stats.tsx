
import React from 'react';

const Stats = () => {
  return (
    <section id="stats" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { number: "300+", label: "Team Members" },
            { number: "500", label: "MPH Target Speed" },
            { number: "15+", label: "Research Papers" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-black/30 backdrop-blur-sm p-10 rounded-lg border border-white/10">
              <div className="text-5xl md:text-6xl font-bold text-[#1EAEDB] mb-4">{stat.number}</div>
              <div className="text-xl text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
