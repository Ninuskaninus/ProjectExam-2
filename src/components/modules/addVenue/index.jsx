import React from "react";
import { ModuleContainer, ModuleContent, ModuleHead } from "../index.styles";
import AddVenueForm from "../../forms/addVenue/index.jsx";

export default function AddVenue() {
  const closeModule = (e) => {
    if (e.target.id === "addVenue") {
      const module = document.getElementById("addVenue");
      module.classList.remove("show");
    }
  };

  return (
    <ModuleContainer onClick={closeModule} id="addVenue">
      <ModuleContent>
        <ModuleHead>
          <h2>Add venue</h2>
        </ModuleHead>
        <AddVenueForm />
      </ModuleContent>
    </ModuleContainer>
  );
}
