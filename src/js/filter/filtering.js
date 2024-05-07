import getVenues from "../venues/get.js";

export default async function filtering(filter) {
  try {
    const venues = await getVenues();

    if (!venues || venues.length === 0) {
      return [];
    }

    const filteredVenues = venues.filter((venue, index) => {
      const meta = venue.meta;

      if (!meta) {
        console.log("Venue without meta:", venue, "Index:", index);
        return false;
      }

      if (!venue.hasOwnProperty("meta")) {
        console.log("Venue without meta:", venue, "Index:", index);
        return false;
      }

      if (
        (filter.pets && !meta.pets) ||
        (filter.wifi && !meta.wifi) ||
        (filter.breakfast && !meta.breakfast) ||
        (filter.parking && !meta.parking)
      ) {
        console.log("Skipping venue due to missing properties:", venue);
        return false;
      }

      if (filter.price && venue.price > filter.price) {
        console.log("Skipping venue due to price filter:", venue);
        return false;
      }

      if (filter.guests && venue.maxGuests < filter.guests) {
        console.log("Skipping venue due to guests filter:", venue);
        return false;
      }

      if (filter.search) {
        const search = filter.search.toLowerCase();
        if (
          !venue.name.toLowerCase().includes(search) &&
          !venue.location.city.toLowerCase().includes(search)
        ) {
          console.log("Skipping venue due to search filter:", venue);
          return false;
        }
      }

      return true;
    });

    return filteredVenues;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
