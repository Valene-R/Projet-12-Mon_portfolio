import styled, {keyframes} from 'styled-components';
import backgroundHome from '../../assets/backgroundHome.jpg';
import chevronIcon from '../../assets/chevronIcon.svg';

export const Root = styled.div`
	width: 100%;
	flex: 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundHome});
	background-size: cover;
	background-position: center;
	height: 100vh;
	width: calc(100% - 250px); /* déduit la largeur de la sidebar */
	position: relative;
	margin-left: 250px; /* déplace le contenu à droite pour laisser de la place à la sidebar */

	@media all and (max-width: 1000px) {
		margin: 0;
  }
`;

export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AnimatedChevron = styled.div`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);

/* Animation */
	animation: moveUpDown 1s infinite;
	@keyframes moveUpDown {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
`;

export const Icon = styled.img.attrs({
	src: chevronIcon,
	alt: "Chevron pointant vers le bas"
})`
	cursor: pointer;
`;

/* Animations Button */
const glowing = keyframes`
	0% { background-position: 0 0; }
	50% { background-position: 400% 0; }
	100% { background-position: 0 0; }
`;

const shake = keyframes`
	10%, 90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%, 80% {
		transform: translate3d(2px, 0, 0);
	}

	30%, 50%, 70% {
		transform: translate3d(-4px, 0, 0);
	}

	40%, 60% {
		transform: translate3d(4px, 0, 0);
	}

	100% {
		transform: translate3d(0, 0, 0);
	}
`;

export const Button = styled.button`
font-size: 14px;
  width: 220px;
  height: 50px;
	margin-top: 20px;
  border: none;
  outline: none;
  color: #FA834E;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
	animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite 1s;

  &:hover:before {
    opacity: 1;
  }

  &:active {
    color: #000;
		background-color: #FA834E;
  }

  &:active:after {
    background: transparent;
  }

  &::before {
    content: '';
    // background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
		background: linear-gradient(45deg, #ff4500, #dc143c, #ff8c00, #b22222);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
