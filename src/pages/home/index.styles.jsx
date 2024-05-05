import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Hero = styled.div`
  background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 580px;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

export const Venues = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 100px 0;
  padding: 0 20px;
`;

export const VenuesHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  div {
    display: flex;
    align-items: center;
    img {
      height: 30px;
      margin-right: 10px;
    }
  }
`;

export const VenuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 980px) {
    justify-content: center;
  }
`;
