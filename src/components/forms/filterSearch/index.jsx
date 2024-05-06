import React, { useEffect } from "react";
import { ResultsItem, ResultsContainer, FormSearch, FormWhite, FormWhiteItem, FormWhiteCheckbox } from "../index.styles";
import Icons from "../../icons";
import Search from "../../../js/filter/search.js";
import filtering from "../../../js/filter/filtering.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FilterForm() {
  const [search, setSearch] = useState("");
  const [venues, setVenues] = useState([]);
  const [filter, setFilter] = useState([
    {
      wifi: false,
      pets: false,
      breakfast: false,
      parking: false,
      price: 0,
      guests: 0,
    }

  ]);

  useEffect(() => {
    Search(search).then((data) => {
      setVenues(data);
    });
  }, [search]);

  filtering(filter);

  return (
    <>
      <FormSearch action="search">
        <input
          id="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for venue" />
        <button type="button"><Icons.Search /></button>
        
        <ResultsContainer id="formResults">
        {Array.isArray(venues) && venues.map((venue) => (
          <Link to={`/venues/${venue.id}`}>
            <ResultsItem key={venue.id}>
                {venue === "" ? <p>No results</p> : <p>{venue.name}</p>}
                
                </ResultsItem>
              </Link>
            ))}
            </ResultsContainer>

      </FormSearch>
      <FormWhite action="">
        <h4>Amenities</h4>
        <FormWhiteCheckbox>
          <input
            onChange={(e) => setFilter({ wifi: e.target.checked })}
            value={filter.wifi}
            type="checkbox"
            name="wifi"
            id="wifi" />
          <label htmlFor="wifi">Wifi</label>
        </FormWhiteCheckbox>
        <FormWhiteCheckbox>
          <input
            onChange={(e) => setFilter({ pets: e.target.checked })}
            value={filter.pets}
            type="checkbox"
            name="pets"
            id="pets" />
          <label htmlFor="pets">Pets allowed</label>
        </FormWhiteCheckbox>
        <FormWhiteCheckbox>
          <input
            onChange={(e) => setFilter({ breakfast: e.target.checked })}
            value={filter.breakfast}
            type="checkbox"
            name="breakfast"
            id="breakfast" />
          <label htmlFor="breakfast">Breakfast included</label>
        </FormWhiteCheckbox>
        <FormWhiteCheckbox>
          <input
            onChange={(e) => setFilter({ parking: e.target.checked })}
            value={filter.parking}
            type="checkbox"
            name="parking"
            id="parking" />
          <label htmlFor="parking">Parking</label>
        </FormWhiteCheckbox>
        <h4>Price</h4>
        <FormWhiteItem>
          <label htmlFor="price">Max price per night</label>
          <input
            onChange={(e) => setFilter({ price: e.target.value })}
            value={filter.price}
            type="number"
            name="price"
            id="price" />
        </FormWhiteItem>
        <h4>Guests</h4>
        <FormWhiteItem>
          <label htmlFor="guests">Number of guests</label>
          <input
            onChange={(e) => setFilter({ guests: e.target.value })}
            value={filter.guests}
            type="number"
            name="guests"
            id="guests" />
        </FormWhiteItem>
      </FormWhite>
    </>
  );
}