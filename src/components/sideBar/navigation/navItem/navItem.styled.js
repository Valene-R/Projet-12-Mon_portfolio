import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';


export const Item = styled(HashLink)`
  margin: 15px 0;
  cursor: pointer;
  text-decoration: none;
  color: #FFF;
  &:hover {
    color: #FA834E;
`;
