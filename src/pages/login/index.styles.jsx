import styled from "styled-components";
import Icons from "../../components/icons";

export const PageContainer = styled.div`
background-color: #000;
min-width: 100%;
height: 100%;
min-height: 90vh;
background-image: url(${Icons.BackgroundImg.src});
position: relative;
display: flex;
justify-content: center;

`;

export const Gradient = styled.div`
background: linear-gradient(270deg, rgba(23, 130, 138, 0.00) 0%, rgba(12, 67, 72, 0.58), #041718);
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 1;
`;

export const Container = styled.div`
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 600px;
  width: 100%;
  height: 100%;
  min-height: 600px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin: 100px 20px;
  }

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

export const Content = styled.div`
width: 100%;
height: 100%;
padding: 40px;
z-index: 3;

@media screen and (max-width: 340px) {
  padding: 20px;
}
`;

export const ContentHeader = styled.div`
margin-bottom: 50px;
p{
  color: var(--white);
}

h2{
  margin: 10px 0;
}
`;

export const ContentBottom = styled.div`
margin-top: 50px;
p{
  color: var(--white);
  font-size: 12px;
  margin-top: 20px;
  line-height: 1.5;
}
`;