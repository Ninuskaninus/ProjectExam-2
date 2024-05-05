import React from "react";
import { BtnCancel } from "../index.styles";

export default function CancelBtn({ id }) {
  const toggleModule = () => {
    if (id === "cancelAddVenue") {
      const module = document.getElementById("addVenue");
      module.classList.remove("show");
    }
    if (id === "cancelEditProfile") {
      const module = document.getElementById("editProfile");
      module.classList.remove("show");
    }
  };
  return (
    <BtnCancel id={id} onClick={toggleModule} type="button">
      Cancel
    </BtnCancel>
  );
}
