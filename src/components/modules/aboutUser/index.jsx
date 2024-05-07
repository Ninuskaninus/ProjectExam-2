import React from "react";
import { AboutUserModal, AboutUserImage } from "../index.styles";
import Icons from "../../icons";

export default function AboutUser({ ownerId, ownerName, ownerAvatar, ownerBio}) {

  const closeModal = (e) => {
    const modal = document.getElementById(ownerId);
    modal.classList.remove("show");
  }

  return (
    <AboutUserModal id={ownerId + "modal"}>
      <button onClick={closeModal}><Icons.Close  /></button>
      <AboutUserImage src={ownerAvatar} alt="" />
      <h4>{ ownerName }</h4>
      <p>{ ownerBio || "No bio on this user" }</p>
    </AboutUserModal>
  )
}