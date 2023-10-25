import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	flex: 3;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
	height: 100vh;
	width: calc(100% - 290px); /* déduit la largeur de la sidebar */
	position: relative;
	margin-left: 290px; /* déplace le contenu à droite pour laisser de la place à la sidebar */
	color: #000; /* Ajustez la couleur du texte selon vos préférences */
	padding-left: 0;
	text-align: center;
	z-index: 1;

	@media all and (max-width: 1000px) {
		width: 100%; 
		margin-left: 0; 
		padding: 0;
	}
`;

export const Title = styled.h1`
  font-size: 130px;
  margin-top: 0;
	position: relative;
  z-index: 1; 
  opacity: 0.7;
	color: #F3EDE9;
	margin: 0;

	@media all and (max-width: 1000px) {
		font-size: 90px; 
	}
`;

export const Subtitle = styled.h2`
  font-size: 30px;
  color: #FA834E;
	position: relative;
  z-index: 2;
	top: -120px;

	@media all and (max-width: 1000px) {
		font-size: 25px; 
		top: -145px; 
	}
`;

export const Description = styled.p`
  width: 60%;
  padding-left: 20%;
  padding-top: 0;
  font-weight: 600;
	text-align: justify;
`;

export const Undraw = styled.img`
	width: 400px;  
  height: auto; 
`;