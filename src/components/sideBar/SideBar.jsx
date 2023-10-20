import React from 'react';
import { Root, ProfileImage } from './sideBar.styled';
import portrait from '../../assets/portrait.png';
import Navigation from './navigation/Navigation';

const SideBar = () => {
	return (
		<Root>
			<ProfileImage src={portrait} alt="Portrait de Valène" />
      <h2>Valène Renaud</h2>
      <Navigation />
      <div>
        {/* media icons */}
      </div>
		</Root>
	);
};

export default SideBar;