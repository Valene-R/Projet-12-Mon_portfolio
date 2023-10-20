import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import { ROUTES } from '../router/routes';

const Router = () => {
  return (
  	<div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        {/* <Route path={ROUTES.A_PROPOS} element={<About />}/>
        <Route path={ROUTES.PORTFOLIO} element={<Portfolio />}/>
        <Route path={ROUTES.COMPETENCES} element={<Skills />}/>
        <Route path={ROUTES.EXPERIENCES} element={<Experiences />}/>
        <Route path={ROUTES.CONTACT} element={<Contact />}/> */}
      </Routes>
    </div>
  );
};

export default Router;
