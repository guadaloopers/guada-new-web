import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://img.pikbest.com/wp/202405/twilight-the-future-of-transportation-hyperloop-concept-in-a-setting-3d-render_9836706.jpg!w700wp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <p className="text-lg md:text-xl text-[#1EAEDB] mb-4 animate-fade-in">FUTURE OF TRANSPORT</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
          HYPERLOOP
          <span className="block">Texas Guadaloop</span>
        </h1>
        <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg border-2 border-white">
          LEARN MORE
        </Button>
      </div>
      <button onClick={scrollToMission} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </button>
    </section>;
};
export default Hero;