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

export const ModuleContainerWhite = styled(ModuleContainer)`
background-color: var(--white);
top: 50px;
width: 320px;
right: 0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding-top: 10px;
`;

export const ModuleContentWhite = styled(ModuleContent)`
background-color: var(--white);
`;

export const ModuleHeadWhite = styled(ModuleHead)`
background-color: var(--white);
h2{
  color: var(--black);
}
`;

export const AboutUserModal = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 100%;
background-color: var(--white);
z-index: 1000;
border-radius: 5px;
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
text-align: center;

h4{
  margin: 10px 0;
}

&.show{
  display: flex;
}

img{
  position: absolute;
  top: 20px;
  right: 10px;
  height: 20px;
  width: 20px;
}
`;

export const AboutUserImage = styled.img`
  width: 100px !important;
  height: 100px !important;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
  position: relative !important;
`;


