import React from "react";
import { BtnAddVenue } from "../index.styles";

export default function AddVenue() {
  const openModule = () => {
    const module = document.getElementById("addVenue");
    module.classList.add("show");
  };

  return (
    <BtnAddVenue onClick={openModule}>
      <div>+</div>
      <p>Add new venue</p>
    </BtnAddVenue>
  );
}
