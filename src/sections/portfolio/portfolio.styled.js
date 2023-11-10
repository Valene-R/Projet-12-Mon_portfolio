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
    padding: 16px;
    width: 90%;
    max-width: 500px;
    border-radius: 8px;
		border-color: 2px solid #FA834E;

    @media all and (max-width: 600px) {
      width: 85%;
      padding: 8px;
    }

    // Pour le scroll en version mobile
    @media (max-width: 768px) { 
      max-height: 80vh !important; 
      overflow-y: auto !important;
      display: flow;
    }
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

  @media (max-width: 768px) { 
    font-size: 30px;
    top: 0;
  }
  @media all and (max-width: 450px) {
    font-size: 25px;
  }
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

export const Icon = styled.img`
  width: 24px;  
  height: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media all and (max-width: 540px) {
    width: 52px;
  }
`;

export const LinkP = styled.p`
  font-size: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media all and (max-width: 540px) {
    font-size: 14px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media all and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const DetailedModal = styled(Modal)`
  div {
    max-width: 800px;
    max-height: 80vh;  
    overflow-y: auto;  
    padding: 16px;  
    border-radius: 4px; 
  
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(155, 155, 155, 0.7);
      border-radius: 20px;
      border: 3px solid transparent;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 350px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  height: 25px;
  width: 120px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  background-color: #000;
  color: #FFF; 
        
  &:hover {
    transform: scale(1.2); 
    background-color: #FA834E;
  }
`;

export const ContainerBtn = styled.div`
  display: flex !important;
  justify-content: center;
  position: absolute;
  bottom: 0; 
  left: 50%;
  transform: translateX(-50%);
`;

