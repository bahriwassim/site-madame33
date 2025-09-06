import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/ServicesSection';
import About from '../components/AboutSection';
import Portfolio from '../components/PortfolioSection';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;