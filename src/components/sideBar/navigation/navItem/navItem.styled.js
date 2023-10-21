import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
  margin: 15px 0;
  cursor: pointer;
  text-decoration: none;
  color: #FFF;
  &:hover {
    color: #C3592A;
  }
`;
