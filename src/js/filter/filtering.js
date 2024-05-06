// filtering.js

import getVenues from "../venues/get.js";

export default async function filtering(filter) {
  try {
    const venues = await getVenues();

    if (!venues || venues.length === 0) {
      return [];
    }

    const filteredVenues = venues.filter((venue) => {
      const meta = venue.meta;

      // Check if meta is defined
      if (!meta) {
        return false;
      }

      // Check each filter criteria
      if (
        (filter.pets && !meta.pets) ||
        (filter.wifi && !meta.wifi) ||
        (filter.breakfast && !meta.breakfast) ||
        (filter.parking && !meta.parking)
      ) {
        return false;
      }

      if (filter.price && venue.price > filter.price) {
        return false;
      }

      if (filter.guests && venue.maxGuests < filter.guests) {
        return false;
      }

      if (filter.search) {
        const search = filter.search.toLowerCase();
        if (
          !venue.name.toLowerCase().includes(search) &&
          !venue.location.city.toLowerCase().includes(search)
        ) {
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
