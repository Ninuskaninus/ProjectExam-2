import React from "react";
import {
  FormContainer,
  FormItem,
  FormBtnContainer,
  FormCheckbox,
  FormCheckboxItem,
} from "../index.styles";
import { useState, useEffect } from "react";
import FormBtn from "../../buttons/FormBtn";
import Icons from "../../icons";
import postVenue from "../../../js/venues/post";
import CancelBtn from "../../buttons/cancel";

export default function AddVenueForm() {
  const [formObject, setFormObject] = useState({
    name: "",
    description: "",
    media: {
      url: "",
      alt: "",
    },

    price: 0,
    maxGuests: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },

    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id.includes(".")) {
      const [parent, child] = id.split(".");
      setFormObject({
        ...formObject,
        [parent]: {
          ...formObject[parent],
          [child]: value,
        },
      });
    } else {
      setFormObject({ ...formObject, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postVenue(formObject);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormItem>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          value={formObject.name}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="description">Description</label>
        <input
          maxLength={200}
          required
          type="text"
          id="description"
          value={formObject.description}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="media.url">Image url</label>
        <input
          type="text"
          id="media.url"
          value={formObject.media.url}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="media.alt">Alt Text</label>
        <input
          type="text"
          id="media.alt"
          value={formObject.media.alt}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="price">Price</label>
        <input
          required
          type="number"
          id="price"
          value={formObject.price}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="maxGuests">Max Guests</label>
        <input
          required
          type="number"
          id="maxGuests"
          value={formObject.maxGuests}
          onChange={handleChange}
        />
      </FormItem>
      <h2>Amenities</h2>
      <FormCheckbox>
        <FormCheckboxItem>
          <input
            onChange={(e) =>
              setFormObject({
                ...formObject,
                meta: { ...formObject.meta, wifi: e.target.checked },
              })
            }
            value={formObject.meta.wifi}
            type="checkbox"
            id="wifi"
          />
          <Icons.WifiWhite />
        </FormCheckboxItem>
        <FormCheckboxItem>
          <input
            onChange={(e) =>
              setFormObject({
                ...formObject,
                meta: { ...formObject.meta, parking: e.target.checked },
              })
            }
            value={formObject.meta.parking}
            type="checkbox"
            id="parking"
          />
          <Icons.ParkingWhite />
        </FormCheckboxItem>
        <FormCheckboxItem>
          <input
            onChange={(e) =>
              setFormObject({
                ...formObject,
                meta: { ...formObject.meta, breakfast: e.target.checked },
              })
            }
            value={formObject.meta.breakfast}
            type="checkbox"
            id="breakfast"
          />
          <Icons.BreakfastWhite />
        </FormCheckboxItem>
        <FormCheckboxItem>
          <input
            onChange={(e) =>
              setFormObject({
                ...formObject,
                meta: { ...formObject.meta, pets: e.target.checked },
              })
            }
            value={formObject.meta.pets}
            type="checkbox"
            id="pets"
          />
          <Icons.PetsWhite />
        </FormCheckboxItem>
      </FormCheckbox>
      <h2>Location</h2>
      <FormItem>
        <label htmlFor="location.address">Address</label>
        <input
          type="text"
          id="location.address"
          value={formObject.location.address}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="location.city">City</label>
        <input
          type="text"
          id="location.city"
          value={formObject.location.city}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="location.zip">Zip</label>
        <input
          type="text"
          id="location.zip"
          value={formObject.location.zip}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="location.country">Country</label>
        <input
          type="text"
          id="location.country"
          value={formObject.location.country}
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="location.continent">Continent</label>
        <input
          type="text"
          id="location.continent"
          value={formObject.location.continent}
          onChange={handleChange}
        />
      </FormItem>
      <FormBtnContainer>
        <FormBtn Text="Add Venue" type="submit" />
        <CancelBtn id="cancelAddVenue" />
      </FormBtnContainer>
    </FormContainer>
  );
}
