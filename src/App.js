import Router from './router/Router';
import  GlobalStyle  from './styles/globalStyle';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;