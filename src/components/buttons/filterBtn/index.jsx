import React from "react";
import { BtnFilter } from "../index.styles";
import Icons from "../../icons/index";

export default function FilterBtn() {
  const openFilter = () => {
    const filterModal = document.getElementById("filterModal");
    filterModal.classList.toggle("show");
  };

  return (
    <BtnFilter onClick={openFilter}>
      <Icons.Filter />
      <p>Filter</p>
    </BtnFilter>
  ) 
}
