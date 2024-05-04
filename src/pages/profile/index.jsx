import React, { useEffect, useState } from "react";
import getProfile from "../../js/profile/get.js";
import {
  Venuemanager,
  Gradient,
  PageHeaderContent,
  PageHeader,
  Pagecontainer,
} from "./index.styles";
import SettingsBtn from "../../components/buttons/settingsBtn/index.jsx";
import Loader from "../../components/loader/index.jsx";
import EditProfile from "../../components/modules/editProfile/index.jsx";
import BioContainer from "../../components/bioContainer/index.jsx";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [venueManager, setVenueManager] = useState(false);
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
  }

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profileData = await getProfile();
        setProfile(profileData.data);

        if (profileData.data && profileData.data.venueManager) {
          setVenueManager(true);
        } else {
          setVenueManager(false);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <Pagecontainer>
      <EditProfile />
      {profile ? (
        <PageHeader style={{ backgroundImage: `url(${profile.banner.url})` }}>
          <SettingsBtn name="Edit profile" type="button" />
          <PageHeaderContent>
            {venueManager ? <Venuemanager>Venue manager</Venuemanager> : null}
            <img src={profile.avatar.url} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
          </PageHeaderContent>
          <Gradient />
        </PageHeader>
      ) : (
        <Loader />
      )}
      {profile ? <BioContainer></BioContainer> : null}
    </Pagecontainer>
  );
}
