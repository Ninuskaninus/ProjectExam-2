import styled from "styled-components";

export const ModuleContainer = styled.div`
display: none;  
z-index: 1000;
height: 100vh;
width: 100%;
position: absolute;
justify-content: center;
padding-top: 100px;
background: rgba(0, 0, 0, 0.5);

  &.show {
    display: flex !important;
  }
`;

export const ModuleContent = styled.div`
width: 500px;
height: fit-content;
position: relative;
padding: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(4, 23, 24, 0.39) 0%, rgba(23, 130, 138, 0.60) 100%);
    border-radius: 10px;
    z-index: -1;
  }
`;

export const ModuleHead = styled.div`
margin-bottom: 30px;
`;