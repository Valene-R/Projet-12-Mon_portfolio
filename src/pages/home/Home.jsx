import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../sections/about/About';
import Portfolio from '../../sections/portfolio/Portfolio';
import Contact from '../../sections/contact/Contact';
import Skills from '../../sections/skills/Skills';
import Experience from '../../sections/experience/Experience';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <>
      <SideBar />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;