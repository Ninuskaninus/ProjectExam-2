export default async function getVenues() {
  const url =
    "https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      const venues = result.data;
      return venues;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
