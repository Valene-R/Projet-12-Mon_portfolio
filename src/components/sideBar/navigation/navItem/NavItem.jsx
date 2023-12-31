import React from 'react';
import { Item } from './navItem.styled';


const NavItem = () => {
	return (
    <>
      <Item smooth to="/#home">Accueil</Item>
      <Item smooth to="/#about">À propos de moi</Item>
      <Item smooth to="/#skills">Compétences</Item>
      <Item smooth to="/#portfolio">Portfolio</Item>
      <Item smooth to="/#experience">Expérience</Item>
      <Item smooth to="/#contact">Contact</Item>
    </>
	);
};

export default NavItem;