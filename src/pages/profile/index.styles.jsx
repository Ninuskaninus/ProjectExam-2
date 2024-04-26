import styled from "styled-components";

export const Pagecontainer = styled.div`
width: 100%;
min-height: 100vh;
background-color: var(--primary);
position: relative;
`;
export const PageHeader = styled.div`
background-size: cover;
background-position: center;
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 320px;

`;

export const PageHeaderContent = styled.div`
position: relative;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
}

h3{
  color: var(--white);
  margin-top: 15px;
}

p{
  color: var(--white);
  font-size: 14px;

}
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; 
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, var(--primary) 0%, rgba(57, 193, 203, 0.00) 100%);
  }
`;

export const Venuemanager = styled.div`
position: absolute;
bottom: 66px;
left: 50%;
transform: translateX(-50%);
width: 160px;
background: var(--secondary);
border-radius: 100px;
text-align: center;
color: var(--black) !important;
font-size: 12px;
padding: 8px 0;
`;