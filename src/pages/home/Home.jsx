import React from 'react';
import { Root } from './home.styled';
import Sidebar from '../../components/sideBar/SideBar';
import HeroSection from '../../components/heroSection/HeroSection';


const Home = () => {
  return (
    <Root>
      <Sidebar/>
      <HeroSection />
    </Root>
  );
};

export default Home;