import React, { useEffect, useState } from "react";
import {
  FormBtnContainer,
  FormCheckbox,
  FormContainer,
  FormItem,
} from "../index.styles";
import FormBtn from "../../buttons/FormBtn/index.jsx";
import editProfile from "../../../js/profile/put.js";
import CancelBtn from "../../buttons/cancel/index.jsx";
import Loader from "../../loader/index.jsx";

export default function EditProfileForm() {
  const manager = localStorage.getItem("manager");
  const avatar = localStorage.getItem("avatar").replace(/^"|"$/g, "");
  const banner = localStorage.getItem("banner").replace(/^"|"$/g, "");
  const bio = localStorage.getItem("bio").replace(/^"|"$/g, "");

  const [editForm, setEditForm] = useState({
    avatar: avatar,
    banner: banner,
    bio: bio,
    venuemanager: manager === "true" ? true : false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      localStorage.setItem("avatar", JSON.stringify(editForm.avatar));
      localStorage.setItem("banner", JSON.stringify(editForm.banner));
      localStorage.setItem("bio", JSON.stringify(editForm.bio));
      localStorage.setItem("manager", JSON.stringify(editForm.venuemanager));
    }
  }, [loading]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editProfile(editForm);
  };

  return (
    <>
      {loading && <Loader />}
      <FormContainer>
        <FormItem>
          <label htmlFor="avatar">Avatar</label>
          <input
            value={editForm.avatar}
            type="text"
            id="avatar"
            name="avatar"
            onChange={(e) =>
              setEditForm({ ...editForm, avatar: e.target.value })
            }
          />
        </FormItem>
        <FormItem>
          <label htmlFor="banner">Banner</label>
          <input
            value={editForm.banner}
            type="text"
            id="banner"
            name="banner"
            onChange={(e) =>
              setEditForm({ ...editForm, banner: e.target.value })
            }
          />
        </FormItem>
        <FormItem>
          <label htmlFor="bio">Bio</label>
          <textarea
            value={editForm.bio}
            id="bio"
            name="bio"
            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
          ></textarea>
        </FormItem>
        {manager === "false" && (
          <FormCheckbox>
            <input
              type="checkbox"
              name="venuemanager"
              id="venuemanager"
              checked={editForm.venuemanager}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  venuemanager: e.target.checked,
                })
              }
            />
            <label htmlFor="venuemanager">Become venue manager</label>
          </FormCheckbox>
        )}
        <FormBtnContainer>
          <FormBtn
            type="button"
            Text="Save"
            onClick={handleFormSubmit}
          ></FormBtn>
          <CancelBtn type="button" />
        </FormBtnContainer>
      </FormContainer>
    </>
  );
}
