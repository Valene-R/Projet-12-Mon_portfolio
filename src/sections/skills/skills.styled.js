import styled from 'styled-components';


export const Root = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  // height: 100vh;
  height: 1100px;
  width: calc(100% - 290px); /* déduit la largeur de la sidebar */
  position: relative;
  margin-left: 290px; /* déplace le contenu à droite pour laisser de la place à la sidebar */
  min-width: 350px;
  max-width: 1154px;

  @media all and (max-width: 1000px) {
    margin: 0;
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  // font-size: 30px;
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
