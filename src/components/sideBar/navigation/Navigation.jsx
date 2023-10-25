import React, { useState } from 'react';
import { Root, Burger } from './navigation.styled';
import NavItem from './navItem/NavItem';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <Burger $isOpen={isOpen}>
        <input id="menu__toggle" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
      </Burger>
      <Root $isOpen={isOpen}>
        <NavItem />
      </Root>
    </>
  );
};

export default Navigation;