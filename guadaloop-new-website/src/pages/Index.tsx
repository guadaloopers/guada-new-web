
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Stats from '../components/Stats';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Mission />
      <Stats />
    </div>
  );
};

export default Index;
