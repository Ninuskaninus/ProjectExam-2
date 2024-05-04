import React from "react";

export const BioContainer = ({ profile }) => {
  return (
    <div>
      {profile ? (
        <div>
          <img src={profile.avatar.url} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
