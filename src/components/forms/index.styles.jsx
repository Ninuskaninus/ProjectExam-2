import styled from "styled-components";

export const FormContainer = styled.form`
widht: 100%;
max-width: 300px;
`;

export const FormItem = styled.div`
position: relative;
margin-bottom: 20px;
img{
  width: 20px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

input{
border-radius: 10px;
background: var(--black);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
height: 50px;
color: var(--white);
padding-left: 10px;
padding-top: 15px;

&::placeholder{
  color: var(--white);
}

}

label{
  color: var(--palmtree);
  font-size: 0.7rem;
  position: absolute;
  top: 5px;
  left: 10px;
}

&.error{
  input{
    border: solid 2px var(--error);
  }
  label{
    color: var(--error);
  }

}

}
`;



export const FormBtnContainer = styled.div`
margin-top: 50px;
`;



export const FormCheckbox = styled.div`
display: flex;
align-items: center;

input[type="checkbox"] {
  --webkit-appearance: none;
  --moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid var(--palmtree) 2px;
  cursor: pointer;

  &:checked {
    background: var(--palmtree);
  }
}

label{
  color: var(--white);
  font-size: 1rem;
  margin-left: 10px;
}
`;