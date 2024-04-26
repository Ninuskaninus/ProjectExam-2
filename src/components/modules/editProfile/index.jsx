import React from "react";
import {ModuleHead, ModuleContainer, ModuleContent} from "../index.styles";
import EditProfileForm from "../../forms/editprofile";

export default function EditProfile() {
  const closeModule = (e) => {
    if (e.target.id === "editProfile") {
      const module = document.getElementById("editProfile");
      module.classList.remove("show");
    }
  };

  return (
    <ModuleContainer onClick={closeModule} id="editProfile">
      <ModuleContent>
        <ModuleHead>
          <h2>Edit profile</h2>
        </ModuleHead>
        <EditProfileForm />
      </ModuleContent>
    </ModuleContainer>
  );
}