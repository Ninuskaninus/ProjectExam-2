import React from "react";
import getProfile from "../../js/profile/get";
import { useEffect, useState } from "react";
import {
  Container,
  Item,
  Description,
  Location,
  IconContainer,
  Image,
} from "./index.styles";
import Icons from "../icons/index.jsx";
import getVenues from "../../js/venues/get.js";
import ViewBtn from "../buttons/viewBtn/index.jsx";

export default function MyVenuesList() {
  const [myVenues, setVenues] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const profile = await getProfile();
      setVenues(profile.data.venues);
    }
    fetchData();
  }, []);

  const IconHandler = ({ venue }) => {
    return (
      <IconContainer>
        {venue.meta.wifi && (
          <div>
            <Icons.Wifi />
          </div>
        )}
        {venue.meta.pets && (
          <div>
            <Icons.Pets />
          </div>
        )}
        {venue.meta.breakfast && (
          <div>
            <Icons.Breakfast />
          </div>
        )}
        {venue.meta.parking && (
          <div>
            <Icons.Parking />
          </div>
        )}
      </IconContainer>
    );
  };

  return (
    <>
      {myVenues && (
        <Container>
          {myVenues.map((venue) => (
            <Item key={venue.id}>
              <ViewBtn />
              <Image src={venue.media[0].url} alt={venue.name} />
              <Description>
                <Location>
                  <p>
                    {venue.location.city} | {venue.location.country}
                  </p>
                </Location>
                <h4>{venue.name}</h4>

                <IconHandler venue={venue} />
              </Description>
            </Item>
          ))}
        </Container>
      )}
    </>
  );
}
