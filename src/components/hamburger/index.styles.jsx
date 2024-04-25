import styled from "styled-components";

export const MenuIcon = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  display: none !important;
  flex-direction: column !important;
  justify-content: space-between;
  div {
    width: 100%;
    height: 3px;
    background-color: var(--white);
    transition: all 0.3s;
    transform-origin: center;
    border-radius: 5px;
  }
  &.open div:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.open div:nth-child(2) {
    opacity: 0;
  }
  &.open div:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media screen and (max-width: 768px) {
    display: flex !important;
    margin-left: 20px;
  }

`;

export const Menu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 150px;
  padding: 20px;
  background: rgba(4, 23, 24, 0.80);
  z-index: 10;
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  align-items: flex-start !important;
  transition: all 0.3s;

  li{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      margin-right: 10px;
    }
  }
`;

