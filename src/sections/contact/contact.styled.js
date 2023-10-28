import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
	height: 100vh;
	width: calc(100% - 290px); /* déduit la largeur de la sidebar */
	position: relative;
	margin-left: 290px; /* déplace le contenu à droite pour laisser de la place à la sidebar */
	color: #000; 
	padding-left: 0;
	text-align: center;
	z-index: 1; 
	margin-top: 30px;  

	@media all and (max-width: 1000px) {
		margin: auto;
	}
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
	min-width: 300px;
	font-size: 130px;
  margin-top: 0;
	position: relative;
  z-index: 1; 
  opacity: 0.7;
	color: #F3EDE9;
	margin: 0;

	@media all and (max-width: 1303px) {
		font-size: 100px;  
	}

	@media all and (max-width: 1070px) {
		font-size: 80px; 
	}

	@media all and (max-width: 914px) {
		font-size: 60px; 
	}

	@media all and (max-width: 758px) {
		font-size: 40px; 
	}
`;

export const Subtitle = styled.h3`
	font-size: 20px;
  text-align: center;
  margin-bottom: 35px;
	width: 100%;
	min-width: 300px;
  color: #FA834E;
	position: relative;
  z-index: 2;
	top: -40px;

	@media all and (max-width: 1000px) {
		font-size: 20px; 
		top: -15px; 
	}

	@media all and (max-width: 914px) {
		font-size: 18px; 
	}
`;

export const Form = styled.form`
  display: grid;
  gap: 10px;
	max-width: 550px;
	width: 100%;
	min-width: 300px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
	text-align: start;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 200px;
  resize: vertical;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 15px 25px;
  background-color: #000;
  color: #FFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #FA834E;
  }
`;

export const Toast = styled.div`
	position: fixed; 
	top: 50%;        
	left: 50%;       
	z-index: 1000;   
	padding: 20px;
	background-color: #74C188;
	border: 1px solid #000;
	box-shadow: 0px 0px 20px rgba(0,0,0,0.8);
	border-radius: 8px;
	width: 300px;
	text-align: center;
	font-weight: bold; 

	@media all and (max-width: 1000px) {
		transform: translate(-50%, -50%);  
	}
`;
