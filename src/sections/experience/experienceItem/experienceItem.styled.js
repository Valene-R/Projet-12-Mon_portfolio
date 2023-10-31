import styled from 'styled-components';

export const Root = styled.div`
  margin: 0 20px 20px 20px;
`;

export const Date = styled.span`
  font-weight: bold;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;

  @media all and (max-width: 500px) {
		width: 100%; 
		margin: 0 10px 0 10px; 
    font-size: 14px;
	}
`;