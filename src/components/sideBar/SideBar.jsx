import React from 'react';
import { ReactComponent as IconGithub } from '../../assets/iconGithubfff.svg';
import { ReactComponent as IconLinkedin } from '../../assets/iconLinkedin.svg';
import { Root, ProfileImage, MediaIcons, Display } from './sideBar.styled';
import portrait from '../../assets/portrait.png';
import Navigation from './navigation/Navigation';

const SideBar = () => {
	return (
		<Root>
			<ProfileImage src={portrait} alt="Portrait de Valène" />
      <h2>Valène Renaud</h2>
      <Display>
        <Navigation />
        <MediaIcons>
          <a href="https://www.linkedin.com/in/valène-renaud-391ab9293" target="_blank" rel="noopener noreferrer">
            <IconLinkedin alt="Logo Linkedin"/>
          </a>
          <a href="https://github.com/Valene-R" target="_blank" rel="noopener noreferrer">
            <IconGithub alt="Logo Github"/>
          </a>
        </MediaIcons>
      </Display>
		</Root>
	);
};

export default SideBar;