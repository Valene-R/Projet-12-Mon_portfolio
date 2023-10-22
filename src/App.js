import  GlobalStyle  from './styles/globalStyle';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';
import Home from './pages/home/Home';


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
      <GlobalStyle />
      <Home />
    </div>
  );
};

export default App;