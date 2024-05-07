export default async function search(search) {
  if (!search) return [];
  const url = `https://v2.api.noroff.dev/holidaze/venues/search?q=${search}`;
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
