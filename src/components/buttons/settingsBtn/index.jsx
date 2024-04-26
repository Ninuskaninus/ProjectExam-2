import React from "react";
import Icons from "../../icons";
import { BtnSettings } from "../index.styles";

export default function SettingsBtn() {
  const toggleModule = () => {
    const module = document.getElementById("editProfile");
    module.classList.add("show"); // Toggle the "show" class
  };

  return (
    <BtnSettings onClick={toggleModule}>
      <Icons.Settings />
    </BtnSettings>
  );
}
