
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-white font-bold text-xl">TEXAS GUADALOOP</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#mission" className="text-gray-300 hover:text-white transition-colors">Mission</a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Impact</a>
          </nav>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors">
            Join Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
