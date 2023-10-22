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
  color: #FFF;

  @media all and (max-width: 1000px) {
    width: 100%;
    height: 60px;  
    flex-direction: row; 
    justify-content: space-between; 
    padding: 0 10px;  
    font-size: 12px;
    justify-content: space-between;

    h2 {
      padding-left: 42px;
    } 
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  border: 4px solid grey;

  @media all and (max-width: 1000px) {
    display: none;
  }
`;

export const MediaIcons = styled.div`
  display: flex;
  gap: 15px; // espace entre les icônes
  margin-top: 200px;

  @media all and (max-width: 1000px) {
    display: flex;
    margin-right: 100px;
    position: relative;
    top: -100px;
    right: 0px;
  }

  svg {
    font-size: 20px; 
    cursor: pointer; 

    &:hover {
      font-size: 30px;
    }
  }
`;

