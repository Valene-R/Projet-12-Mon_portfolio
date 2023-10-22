import styled, { keyframes } from 'styled-components';

// Conteneur principal
export const Root = styled.div`
  width: calc(${props => props.maxLength}ch); 
  min-height: 40px;
  color: #FFF;
`;

// Animation de frappe
export const typeAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

// Texte affiché pendant l'animation
export const TypingText = styled.span`
  font-size: 24px;
  font-family: 'Source Code Pro', monospace; 
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 2px;
  margin-right: -2px;
  border-right: 1px solid #fff;  
  width: calc(${(props) => props.width}ch - 0.5ch);  
  animation: ${typeAnimation} ${(props) => props.$animationDuration}s steps(${(props) => props.width}, end);

  @media all and (max-width: 524px) {
    font-size: 18px;
  }
`;
