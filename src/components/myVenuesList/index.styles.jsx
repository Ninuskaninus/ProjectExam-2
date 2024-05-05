import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.div`
  background-color: var(--primary);
  border-radius: 10px;
  height: fit-content;
  max-height: 200px;
  display: flex;
  gap: 20px;
  position: relative;
`;

export const Image = styled.img`
  min-width: 150px;
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Description = styled.div`
  padding: 20px;
  width: 100%;
  h4 {
    margin-bottom: 10px;
    color: var(--white);
    font-weight: 500;
  }
`;

export const Location = styled.div`
  margin-bottom: 10px;
  p {
    color: var(--white);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  div {
    height: 25px;
    width: 25px;
    background-color: var(--white);
    padding: 5px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 10px;
    }
  }
`;
