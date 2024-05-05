export default function postVenue(formObject) {
  const url = "https://v2.api.noroff.dev/holidaze/venues";
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  // Parse price and maxGuests as numbers
  const price = parseFloat(formObject.price);
  const maxGuests = parseInt(formObject.maxGuests);

  // Construct the body object with parsed numbers
  const body = {
    name: formObject.name,
    description: formObject.description,
    media: [
      {
        url: formObject.media.url,
        alt: formObject.media.alt,
      },
    ],
    price: !isNaN(price) ? price : 0, // Check if price is NaN
    maxGuests: !isNaN(maxGuests) ? maxGuests : 0, // Check if maxGuests is NaN
    meta: {
      wifi: formObject.meta.wifi,
      parking: formObject.meta.parking,
      breakfast: formObject.meta.breakfast,
      pets: formObject.meta.pets,
    },
    location: {
      address: formObject.location.address,
      city: formObject.location.city,
      zip: formObject.location.zip,
      country: formObject.location.country,
      continent: formObject.location.continent,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(body),
  };

  try {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        alert("Venue added successfully!");
        window.location.reload();
      });
  } catch (error) {
    console.error(error);
  }
}
