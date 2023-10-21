import React from 'react';
import { ReactComponent as IconGithub } from '../../assets/iconGithub.svg';
import { ReactComponent as IconLinkedin } from '../../assets/iconLinkedin.svg';
import { Root, ProfileImage, MediaIcons } from './sideBar.styled';
import portrait from '../../assets/portrait.png';
import Navigation from './navigation/Navigation';

const SideBar = () => {
	return (
		<Root>
			<ProfileImage src={portrait} alt="Portrait de Valène" />
      <h2>Valène Renaud</h2>
      <Navigation />
      <MediaIcons>
        <IconLinkedin />
        <IconGithub />
      </MediaIcons>
		</Root>
	);
};

export default SideBar;