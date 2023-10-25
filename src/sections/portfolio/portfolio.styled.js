import styled from 'styled-components';

export const Root = styled.div`
  margin: 20px 0;
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
    margin: auto;
  }

  @media all and (max-width: 586px) {
    min-width: 300px;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 330px;
	height: 480px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
  background-color: #F3EDE9;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px
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