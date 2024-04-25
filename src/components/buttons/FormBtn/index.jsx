import React from "react";
import {BtnForm} from "../index.styles";

export default function FormBtn({Text, type, onClick, onSubmit}) {
  return (
    <BtnForm onSubmit={onSubmit} onClick={onClick} type={type}>{Text}</BtnForm>
  )
}