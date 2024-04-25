import React from "react";
import {FooterContainer} from "./index.styles";
import Icons from "../icons";

export default function Footer() {
  return (
    <FooterContainer>
      <Icons.Logo />
      <h3>Holidaze</h3>
      <p>&copy; Nina Amdal</p>
    </FooterContainer>
  );
}