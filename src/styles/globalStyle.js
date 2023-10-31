import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    /* Pour les navigateurs WebKit (Chrome, Safari) */
    ::-webkit-scrollbar {
    width: 0;
    }

    /* Pour IE et Edge */
    -ms-overflow-style: none;

    /* Pour Firefox */
    scrollbar-width: none;

    font-family: 'Source Code Pro', monospace; 
		width: 100%;
		height: 100vh;
    margin: 0;
  }

  html, body {
    overflow-x: hidden;
  }

  main {
    max-width: 1440px;
  }
`;


export default GlobalStyle;