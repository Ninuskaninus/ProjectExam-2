import styled from "styled-components";

export const BtnForm = styled.button`
  border-radius: 100px;
  background: var(--palmtree);
  width: 126px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background: var(--marine);
  }
`;

export const BtnSettings = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  img {
    width: 100%;
  }
`;

export const BtnCancel = styled.button`
  color: var(--palmtree);
  background: transparent;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const BtnAddVenue = styled.button`
  background: transparent;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
  }

  div {
    background: var(--palmtree);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const BtnView = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--palmtree);
  border-radius: 100px;
  padding: 5px 10px;
`;
