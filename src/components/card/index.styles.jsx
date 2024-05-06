import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: var(--primary);
  border-radius: 10px;
  position: relative;

`;

export const ContainerImg = styled.div`
  height: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageurl});
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`;

export const CardLocation = styled.div`
  background-color: var(--primary);
  width: fit-content;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  color: var(--white);
  border-radius: 0 10px 10px 0;
  font-size: 0.8rem;
`;

export const CardIcons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  gap: 5px;
  display: flex;

  img {
    width: 25px;
    height: 25px;
    background-color: var(--white);
    padding: 5px;
    border-radius: 2px;
    ox-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const CardInfo = styled.div`
  padding: 10px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardManager = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--white);
  }
  p {
    color: var(--white);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CardBeds = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 15px;
    height: 15px;
  }
  p {
    color: var(--white);
  }
`;

export const CardBottom = styled.div`
  margin-top: 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: var(--white);
    font-size: 1.6rem;
  }
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  p {
    color: var(--white);
  }
`;

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 15px;
    height: 15px;
  }
`;
