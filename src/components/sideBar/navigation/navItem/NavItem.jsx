import React from 'react';
import { Item } from './navItem.styled';
import { ROUTES } from '../../../../router/routes';

const NavItem = () => {
	return (
    <>
      <Item to={ROUTES.HOME}>Accueil</Item>
      <Item to={ROUTES.A_PROPOS}>A propos de moi</Item>
      <Item to={ROUTES.PORTFOLIO}>Portfolio</Item>
      <Item to={ROUTES.COMPETENCES}>Compétences</Item>
      <Item to={ROUTES.EXPERIENCES}>Expériences</Item>
      <Item to={ROUTES.CONTACT}>Contact</Item>
    </>
	);
};

export default NavItem;