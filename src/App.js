import React from 'react';
import Router from './router/Router';
import  GlobalStyle  from './styles/globalStyle';


const App = () => {
  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;