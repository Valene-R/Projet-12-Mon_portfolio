import styled, { keyframes } from 'styled-components';
import imgLoad from '../../assets/imgLoader.jpg';

export const screen1Animation = keyframes`
  3%, 97% {
    width: 160px;
    height: 100px;
    margin-top: -50px;
    margin-left: -80px;
  }
  30%, 36% {
    width: 80px;
    height: 120px;
    margin-top: -60px;
    margin-left: -40px;
  }
  63%, 69% {
    width: 40px;
    height: 80px;
    margin-top: -40px;
    margin-left: -20px;
  }
`;

export const screen2Animation = keyframes`
  3%, 97% {
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
  }
  30%, 36% {
    width: 70px;
    height: 96px;
    margin-top: -48px;
    margin-left: -35px;
  }
  63%, 69% {
    width: 32px;
    height: 60px;
    margin-top: -30px;
    margin-left: -16px;
  }
`;

export const screen3Animation = keyframes`
  3%, 97% {
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
  }
  30%, 36% {
    width: 8px;
    height: 8px;
    margin-top: 49px;
    margin-left: -5px;
    border-radius: 8px;
  }
  63%, 69% {
    width: 16px;
    height: 4px;
    margin-top: -37px;
    margin-left: -8px;
    border-radius: 10px;
  }
`;

export const LoaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000; 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const LoaderContainer = styled.div`
	position: relative;
	width: 200px;
	height: 200px;
`;

export const Screen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 160px;
  height: 100px;
  margin-top: -50px;
  margin-left: -80px;
  border-radius: 5px;
  background-color: grey;
  animation: ${screen1Animation} 3s cubic-bezier(.55,.3,.24,.99) infinite;
  

  &:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
    border-radius: 3px;
    // background-color: #FFF;
    background: url(${imgLoad}) no-repeat center/cover;
    animation-name: ${screen2Animation};
  }

  &:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 0 0 5px 5px;
    background-color: #FA834E;
    animation-name: ${screen3Animation};
  }
`;