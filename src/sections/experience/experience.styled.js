import styled from 'styled-components';


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-position: center;
  width: calc(100% - 290px);
  position: relative;
  margin-left: 290px;
  max-width: 80%; /* limite la largeur du conteneur à 80% de sa largeur parente */
  margin-right: 20px;

  @media all and (max-width: 1000px) {
		width: 100%; 
		margin: auto; 
	}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 130px;
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
  margin: auto 30px;
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