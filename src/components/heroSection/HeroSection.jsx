import React from 'react';
import { Root, Welcome, Button, AnimatedChevron, Icon } from './heroSection.styled';
import TypingAnimation from '../typingAnimation/TypingAnimation';


const HeroSection = () => {
	return (
		<Root id="home">
			<Welcome>
        <h1>Bienvenue</h1>
        <TypingAnimation />
        <p>basée dans le Nord de la France.</p>
        <Button>Travaillons ensemble</Button>
      </Welcome>
      <AnimatedChevron>
        <div id="aboutIcon">
          <Icon onClick={() => document.getElementById('aboutIcon').scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </AnimatedChevron>
		</Root>
	);
};

export default HeroSection;