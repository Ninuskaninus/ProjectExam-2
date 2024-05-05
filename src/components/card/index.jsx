import React, { useState, useEffect } from "react";
import getVenues from "../../js/venues/get.js";
import getProfile from "../../js/profile/get.js";
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
  const [myVenues, setMyVenues] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVenues().then((data) => {
      setVenues(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getProfile().then((data) => {
      setMyVenues(data.data.venues);
    });
  }, []);

  useEffect(() => {
    getProfile().then((data) => {
      setMyBookings(data.data.bookings);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const test = venues[0];
  console.log(myBookings);

  const IconHandling = () => {
    switch (true) {
      case test.meta.wifi === true:
        return <Icons.Wifi />;
      case test.meta.pets === true:
        return <Icons.Pets />;
      case test.meta.breakfast === true:
        return <Icons.Breakfast />;
      case test.meta.parking === true:
        return <Icons.Parking />;
      default:
        return null;
    }
  };

  return (
    <Link to={`/venue=${test.id}`}>
      <Container>
        <ContainerImg imageurl={test.media[0].url}>
          <CardLocation>
            {test.location.country} | {test.location.city}
          </CardLocation>
          <CardIcons>
            <IconHandling />
          </CardIcons>
        </ContainerImg>
        <CardInfo>
          <CardTop>
            <CardManager>
              <img src={test.owner.avatar.url} alt="" />
              <p>{test.owner.name}</p>
            </CardManager>
            <CardBeds>
              <Icons.Person />
              <p>{test.maxGuests} people</p>
            </CardBeds>
          </CardTop>
          <CardBottom>
            <div>
              <h3>{test.name}</h3>
            </div>
            <CardPrice>
              <p>{test.price} NOK</p>
              <CardRating>
                <Icons.Reviews />
                <p>{test.rating}</p>
              </CardRating>
            </CardPrice>
          </CardBottom>
        </CardInfo>
      </Container>
    </Link>
  );
}
