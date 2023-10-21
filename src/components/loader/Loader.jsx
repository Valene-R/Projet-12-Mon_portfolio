import React from 'react';
import { LoaderContainer, LoaderBackground, Screen } from './loader.styled';

const Loader = () => {
  return (
		<LoaderBackground>
			<LoaderContainer>
				<Screen />
				<Screen />
				<Screen />
			</LoaderContainer>
    </LoaderBackground>
  );
};

export default Loader;