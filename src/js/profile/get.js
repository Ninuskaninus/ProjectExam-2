import getApiKey from "../apiKey/post.js";

export default async function getProfile() {
  const apiKey = await getApiKey();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const username = user.replace(/^"(.*)"$/, "$1");
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}?_bookings=true&_venues=true`;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Noroff-API-Key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const profile = json;
    localStorage.setItem("manager", JSON.stringify(profile.data.venueManager));
    return profile;
  } catch (error) {
    console.log(error);
  }
}
