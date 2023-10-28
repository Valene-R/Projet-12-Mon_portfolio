import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../sections/about/About';
import Portfolio from '../../sections/portfolio/Portfolio';
import Contact from '../../sections/contact/Contact';


const Home = () => {
  return (
    <div>
      <SideBar/>
      <HeroSection id="home" />
      <About id="about"/>
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;