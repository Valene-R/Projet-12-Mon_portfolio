import styled from 'styled-components';


export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #0a0a0a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  border: 4px solid grey;
`;

export const MediaIcons = styled.div`
  display: flex;
  gap: 15px; // espace entre les icônes
  margin-top: 200px;

  svg {
    font-size: 20px; 
    cursor: pointer; 

    &:hover {
      font-size: 30px;
    }
  }
`;

