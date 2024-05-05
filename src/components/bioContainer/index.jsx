import React from "react";
import { Container } from "./index.styles";

export default function BioContainer() {
  const bio = localStorage.getItem("bio").replace(/^"|"$/g, "");
  return (
    <>
      <Container>
        <h2>About me</h2>
        <p>{bio}</p>
      </Container>
    </>
  );
}
