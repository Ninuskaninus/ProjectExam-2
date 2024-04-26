import React from "react";
import {FormBtnContainer, FormCheckbox, FormContainer, FormItem} from "../index.styles";
import FormBtn from "../../buttons/FormBtn/index.jsx";

export default function EditProfileForm() {
  return (
    <FormContainer>
      <FormItem>
        <label htmlFor="avatar">Avatar</label>
        <input
          type="text"
          id="avatar"
          name="avatar"
        />
      </FormItem>
      <FormItem>
        <label htmlFor="banner">Banner</label>
        <input
          type="text"
          id="banner"
          name="banner"
        /> 
      </FormItem>
      <FormItem>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio">
          </textarea>
      </FormItem>

        <FormCheckbox>
        <input type="checkbox" name="venuemanager" id="venuemanager" />
        <label htmlFor="venuemanager">Become venue manager</label>
      </FormCheckbox> 
      
        <FormBtnContainer>
          <FormBtn type="submit" Text="Save"></FormBtn>
        </FormBtnContainer>
    </FormContainer>
  )

}