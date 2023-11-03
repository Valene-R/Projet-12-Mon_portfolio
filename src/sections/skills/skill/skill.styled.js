import styled from 'styled-components';


export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px 0 0 0;
`;

export const SkillText = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 0 15px 0 15px;
  text-align: center;
  
  @media all and (max-width: 754px) {
    max-width: 662px;
    min-width: 300px;
    margin: auto;
  }
`;

export const SkillName= styled.div`
  padding-top: 10px;
  font-weight: bold;
`;