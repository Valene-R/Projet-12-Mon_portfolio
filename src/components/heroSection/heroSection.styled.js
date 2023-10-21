import styled from 'styled-components';
import backgroundHome from '../../assets/backgroundHome.jpg';
import chevronIcon from '../../assets/chevronIcon.svg';

export const Root = styled.div`
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
`;

export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Button = styled.button`
	padding: 10px 20px;
	border: none;
	background-color: #C3592A;
	color: #000000;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 50px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  border: none;
  background-color: #C3592A;
  color: #000000;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 3px solid #ffdb00;
    animation: borderRun 8s linear infinite;
  }
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