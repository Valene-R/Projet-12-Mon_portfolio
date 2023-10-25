import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../sections/about/About';
import Portfolio from '../../sections/portfolio/Portfolio';


const Home = () => {
  return (
    <div>
      <SideBar/>
      <HeroSection id="home" />
      <About id="about"/>
      <Portfolio id="portfolio"/>
      
    </div>
  );
};

export default Home;