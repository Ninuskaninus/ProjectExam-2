import React, { useState, useEffect } from "react";
import getVenues from "../../js/venues/get.js";
import {
  Container,
  ContainerImg,
  CardLocation,
  CardIcons,
  CardInfo,
  CardTop,
  CardManager,
  CardBeds,
  CardBottom,
  CardPrice,
  CardRating,
} from "./index.styles";
import Icons from "../icons/index.jsx";
import { Link } from "react-router-dom";
import Loader from "../loader/index.jsx";

export default function Card() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVenues().then((data) => {
      const filteredVenues = data.filter((venue) => {
        const name = venue.name.toLowerCase();
        return !name.includes("test") && !name.includes("string");
      });

      setVenues(filteredVenues);
      setLoading(false);
    });
  }, []);

  console.log(venues);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {venues.map((venue) => (
        <Link to={`/venue=${venue.id}`} key={venue.id}>
          <Container key={venue.id}>
            <ContainerImg
              imageurl={
                venue.media.length > 0
                  ? venue.media[0].url
                  : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
              }
            >
              <CardLocation>
                {venue.location.country || "Unknown"} |{" "}
                {venue.location.city || "Unknown"}
              </CardLocation>
              <CardIcons>
                {venue.meta.wifi && <Icons.Wifi />}
                {venue.meta.pets && <Icons.Pets />}
                {venue.meta.breakfast && <Icons.Breakfast />}
                {venue.meta.parking && <Icons.Parking />}
              </CardIcons>
            </ContainerImg>
            <CardInfo>
              <CardTop>
                <CardManager>
                  <img src={venue.owner.avatar.url} alt="" />
                  <p>{venue.owner.name}</p>
                </CardManager>
                <CardBeds>
                  <Icons.Person />
                  <p>{venue.maxGuests} people</p>
                </CardBeds>
              </CardTop>
              <CardBottom>
                <div>
                  <h3>{venue.name}</h3>
                </div>
                <CardPrice>
                  <p>{venue.price} NOK</p>
                  <CardRating>
                    <Icons.Reviews />
                    <p>{venue.rating}</p>
                  </CardRating>
                </CardPrice>
              </CardBottom>
            </CardInfo>
          </Container>
        </Link>
      ))}
    </>
  );
}
