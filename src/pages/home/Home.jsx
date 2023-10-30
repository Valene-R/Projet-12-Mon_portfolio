import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../sections/about/About';
import Portfolio from '../../sections/portfolio/Portfolio';
import Contact from '../../sections/contact/Contact';
import Skills from '../../sections/skills/Skills';


const Home = () => {
  return (
    <div>
      <SideBar />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;