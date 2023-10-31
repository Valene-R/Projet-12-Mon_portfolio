import styled from 'styled-components';

export const Root = styled.section`
  margin: 40px 0;
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  width: calc(100% - 290px);
  position: relative;
  margin-left: 290px;
  min-width: 350px;
  max-width: 1154px;
  margin-bottom: 35px;

  @media all and (max-width: 1000px) {
		margin: auto;
	}
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 130px;
  margin-top: 0;
	position: relative; 
  opacity: 0.7;
	color: #F3EDE9;
	margin: 0;

	@media all and (max-width: 1154px) {
		font-size: 90px; 
	}

	@media all and (max-width: 914px) {
		font-size: 60px; 
	}

	@media all and (max-width: 758px) {
		font-size: 40px; 
	}
`;

export const Subtitle = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: auto 50px;
  font-size: 25px;
  color: #FA834E;
  font-weight: 600;

	@media all and (max-width: 1154px) {
		font-size: 20px; 
	}

	@media all and (max-width: 914px) {
		font-size: 18px;
	}
`;

export const Projects = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
  width: calc(100% - 290px); // déduit la largeur de la sidebar 
	position: relative;
	margin-left: 290px; // déplace le contenu à droite pour laisser de la place à la sidebar 
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1000px) {
    margin: 30px auto;
  }

  @media all and (max-width: 586px) {
    min-width: 300px;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 330px;
	height: 380px;
  box-shadow: 0px 0px 18px rgba(0,0,0,0.4);
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
  background-color: #F3EDE9;
  &:nth-of-type(4) img {
    object-position: center 80%;  // Positionne le contenu de l'image vers le bas
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
		margin: 0; 
    padding: 0; 
  }

	h3 {
		text-align: center;
	}
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 290px);
	margin-left: 290px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.$show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media all and (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
  }

  div {
		position: relative;  
    background: #F3EDE9;
    padding: 1rem;
    width: 80%;
    max-width: 500px;
    border-radius: 8px;
		border-color: 2px solid #FA834E;
  }
`;

export const TechList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 20px;
`;

export const TechItem = styled.li`
  margin: 5px 0;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

export const ProjectLink = styled.a`
  text-decoration: none; 
  color: inherit; 
  display: flex;
  flex-direction: row;
  height: 30px;
  gap: 10px;
  align-items: center;
  width: 400px;

  &:hover {
    text-decoration: underline; 
    color: #FA834E; 
  }
`;

export const GithubIcon = styled.img`
  width: 24px;  
  height: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const PlayIcon = styled.img`
  width: 24px;  
  height: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;