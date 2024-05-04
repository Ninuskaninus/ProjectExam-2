import React from "react";
import { BtnCancel } from "../index.styles";

export default function CancelBtn() {
  const toggleModule = () => {
    const module = document.getElementById("editProfile");
    module.classList.remove("show");
  };
  return (
    <BtnCancel onClick={toggleModule} type="button">
      Cancel
    </BtnCancel>
  );
}
