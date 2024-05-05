import React from "react";
import { CardContainer, Container, ContainerHead } from "./index.styles";
import { useEffect, useState } from "react";
import AddVenue from "../buttons/addVenue/index.jsx";
import MyVenuesList from "../myVenuesList/index.jsx";

export default function MyVenues() {
  const manager = localStorage.getItem("manager");

  if (manager === "true") {
    return (
      <Container>
        <ContainerHead>
          <h4>My venues</h4>
          <AddVenue />
        </ContainerHead>
        <CardContainer>
          <MyVenuesList />
        </CardContainer>
      </Container>
    );
  }

  return null;
}
