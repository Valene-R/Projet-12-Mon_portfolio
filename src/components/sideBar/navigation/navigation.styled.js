import styled from 'styled-components';


export const Root = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 999px) and (max-width: 1000px) {
    opacity: ${props => props.$isOpen ? 1 : 0};
    max-height: ${props => props.$isOpen ? 'auto' : '0'};
    overflow: ${props => props.$isOpen ? 'visible' : 'hidden'};
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(10, 10, 10, 0.8);
    z-index: 10; 
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

  @media all and (max-width: 998px) {
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out 0.1s;
    max-height: ${props => props.$isOpen ? '1000px' : '0'};
    opacity: ${props => props.$isOpen ? 1 : 0};
    overflow: hidden;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(10, 10, 10, 0.8);
    z-index: 10; 
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

export const Burger = styled.div`
  display: none;

  #menu__toggle {
    position: absolute;
    left: -9999px;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px; 
    right: 20px; 
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    margin-right: 50px;

    span, & > span::before, & > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #FFF;
      transition-duration: .25s;
    }
    & > span::before {
      content: '';
      top: -8px;
    }
    & > span::after {
      content: '';
      top: 8px;
    }

    ${props => props.$isOpen && `
      span {
        transform: rotate(45deg);
      }
      & > span::before {
        top: 0;
        transform: rotate(0);
      }
      & > span::after {
        top: 0;
        transform: rotate(90deg);
      }
    `}
  }

  @media all and (max-width: 1000px) {
    display: block;
  }
`;
