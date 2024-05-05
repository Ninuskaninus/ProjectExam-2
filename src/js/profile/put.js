export default async function editProfile(editForm) {
  const token = localStorage.getItem("token");
  const api = localStorage.getItem("apiKey");
  const user = localStorage.getItem("user");
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${user.replace(/^"(.*)"$/, "$1")}`;

  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Noroff-API-Key": api,
    },
    body: JSON.stringify({
      avatar: {
        url: editForm.avatar,
      },
      banner: {
        url: editForm.banner,
      },
      bio: editForm.bio,
      venueManager: editForm.venueManager,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    localStorage.setItem("avatar", JSON.stringify(json.data.avatar.url));
    localStorage.setItem("banner", JSON.stringify(json.data.banner.url));
    localStorage.setItem("bio", JSON.stringify(json.data.bio));
    localStorage.setItem("manager", json.data.venueManager);

    window.location.reload();

    return json;
  } catch (error) {
    console.log(error);
  }
}
