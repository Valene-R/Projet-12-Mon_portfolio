import React, { useState } from 'react';
import { Root, Burger } from './navigation.styled';
import NavItem from './navItem/NavItem';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </Burger>
      <Root $isOpen={isOpen}>
        <NavItem />
      </Root>
    </>
  );
};

export default Navigation;