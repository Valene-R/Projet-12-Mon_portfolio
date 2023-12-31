import styled from 'styled-components';


export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
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
    z-index: 900;

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
  padding-bottom: 50px;
  gap: 15px;
  margin-top: auto;
  justify-content: center;
   
  @media all and (max-width: 1000px) {
    display: flex;
    margin-right: 100px;
    position: relative;
    top: -75px;
    right: 0px;
    padding-top: 200px;
    margin-top: unset;
    justify-content: end;
  }

  svg {
    font-size: 20px; 
    cursor: pointer; 
    transition: font-size 0.3s ease; 

    &:hover {
      font-size: 30px;
    }
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;