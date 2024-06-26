import styled from "styled-components";

export const FormContainer = styled.form`
  widht: 100%;
  max-width: 300px;

  h2 {
    margin: 20px 0;
    color: var(--white);
  }
`;

export const FormItem = styled.div`
  position: relative;
  margin-bottom: 20px;

  img {
    width: 20px;
    position: absolute;
    right: 10px;
    top: 25px;
    transform: translateY(-50%);
  }

  input,
  textarea {
    border-radius: 10px;
    background: var(--black);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 50px;
    color: var(--white);
    padding-left: 10px;
    padding-top: 15px;
    font-family: var--(mainFont);

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px var(--black) inset !important;
      -webkit-text-fill-color: white !important;
    }

    &::placeholder {
      color: var(--white);
    }
  }

  textarea {
    height: 100px;
    padding-top: 25px;
    max-width: 300px;
  }

  label {
    color: var(--palmtree);
    font-size: 0.7rem;
    position: absolute;
    top: 5px;
    left: 10px;
  }

  &.error input {
    border: solid 2px var(--error);
  }

  &.error label {
    color: var(--error);
  }

  &.error p {
    color: var(--error);
    margin-top: 20px;
    font-size: 1rem;
  }
`;

export const FormBtnContainer = styled.div`
  margin-top: 50px;
  gap: 20px;
  display: flex;
  align-items: center;
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

  label {
    color: var(--white);
    font-size: 1rem;
    margin-left: 10px;
  }
`;

export const FormCheckboxItem = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    height: 20px;
    margin-left: 5px;
  }
`;

export const FormSearch = styled.form`
position: relative;
display: flex;
flex-direction: column;

input{
border-radius: 10px;
background: var(--White, #FFF);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
height: 30px;
padding-left: 10px;
}

img{
position: absolute;
right: 10px;
top: 8px;
}

`;

export const FormWhite = styled(FormContainer)`
h4{
  margin: 20px 0;
}
`;

export const FormWhiteItem = styled(FormItem)`
input{
  background: var(--white);
  color: var(--black);
}
label{
  color: var(--black);
}
`;

export const FormWhiteCheckbox = styled(FormCheckbox)`
label{
color: var(--black);
}
`;

export const ResultsContainer = styled.div`
background: #fff;
margin-top: 10px;
max-height: 300px;
max-width: 300px;
overflow-y: scroll;
overflow-x: hidden;
display: flex;
gap: 10px;
flex-direction: column;
`;

export const ResultsItem = styled.div`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
padding: 5px;

&:hover{
  background: var(--palmtree);
  p{
    color: var(--white);
  }
}

`;
