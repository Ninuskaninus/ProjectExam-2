import styled from "styled-components";

export const Nav = styled.nav`
width: 100%;
height: 60px;
background-color: var(--black);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 40px;

h1{
  color: var(--white);
}

li{
  color: var(--white);
}

img{
  height: 12px;
  margin-right: 5px;
}

div{
  display: flex;
  align-items: center;
}

p{
  color: var(--palmtree);
}

  @media (max-width: 768px){
    padding: 0 20px;
    div{
    flex-direction: row-reverse;
    }
  }
`;

export const MenuList = styled.ul`

  display: flex;
  gap: 20px;
  margin-right: 40px;
  cursor: pointer;

  li{
    display: flex;
    align-items: center;
  }

  p{
    color: var(--white);

    &:hover{
      color: var(--palmtree);
    }
  }

  @media (max-width: 768px){
    display: none;
  }
`;

export const MenuLogo = styled.div`
  @media (max-width: 768px){
    h1{
      font-size: 1.5rem;
    }
  }
`;

