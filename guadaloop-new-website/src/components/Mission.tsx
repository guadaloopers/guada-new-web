
import React from 'react';
import { RocketIcon, AtomIcon, BrainCircuitIcon } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518482872122-450d3f5a61d6')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: RocketIcon,
              title: "Innovation",
              description: "Pushing the boundaries of transportation technology through cutting-edge research and development."
            },
            {
              icon: AtomIcon,
              title: "Sustainability",
              description: "Creating eco-friendly transport solutions that minimize environmental impact while maximizing efficiency."
            },
            {
              icon: BrainCircuitIcon,
              title: "Education",
              description: "Fostering the next generation of engineers and innovators through hands-on experience."
            }
          ].map((item, index) => (
            <div key={index} className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="inline-block p-4 bg-white/10 rounded-lg mb-4">
                <item.icon className="w-8 h-8 text-[#1EAEDB]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
