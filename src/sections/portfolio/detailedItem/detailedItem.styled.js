import styled from 'styled-components';


export const Root = styled.article`
  background-color: #f9f9f9;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

export const Item = styled.li`
  // Contenu des Tasks, Challenges, Solutions
  font-size: 15px;
  color: #000;
  margin-bottom: 8px;
  position: relative;

  &:before {
    content: '•';
    color: #FA834E;
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media all and (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const Paragraph = styled.p`
  // Contenu du Context
  font-size: 16px; 
  color: #000;

  @media all and (max-width: 1000px) {
    font-size: 15px;
  }
`;