import React from "react";
import Arrow from "../../assets/icons/arrow_green.png";
import Logo from "../../assets/icons/logo.png";
import Mail from "../../assets/icons/mail_green.png";
import MailRed from "../../assets/icons/mail_red.png";
import Password from "../../assets/icons/password_green.png";
import PasswordRed from "../../assets/icons/password_red.png";
import UserIcon from "../../assets/icons/id_green.png";
import UserIconRed from "../../assets/icons/id_red.png";
import Settings from "../../assets/icons/settings_green.png";
import BackgroundImg from "../../assets/images/background.avif";
import Add from "../../assets/icons/add_circle_blue.png";
import Breakfast from "../../assets/icons/breakfast_blue.png";
import Pets from "../../assets/icons/pets_blue.png";
import Wifi from "../../assets/icons/wifi_blue.png";
import Parking from "../../assets/icons/parcing_blue.png";
import Reviews from "../../assets/icons/reviews_white.png";
import Person from "../../assets/icons/person_white.png";
import LocationWhite from "../../assets/icons/location_white.png";
import WifiWhite from "../../assets/icons/wifi_white.png";
import ParkingWhite from "../../assets/icons/parcing_white.png";
import BreakfastWhite from "../../assets/icons/breakfast_white.png";
import PetsWhite from "../../assets/icons/pets_white.png";

const Icons = {
  Arrow: () => {
    return (
      <img src={Arrow} name="Arrow icon" alt="Arrow icon" role="presentation" />
    );
  },
  Logo: () => {
    return <img src={Logo} alt="Holidaze logo icon" role="presentation" />;
  },
  Mail: () => {
    return <img src={Mail} alt="Mail icon" role="presentation" />;
  },

  MailRed: () => {
    return <img src={MailRed} alt="Mail icon error" role="presentation" />;
  },

  Password: () => {
    return <img src={Password} alt="Password icon" role="presentation" />;
  },

  PasswordRed: () => {
    return (
      <img src={PasswordRed} alt="Password icon error" role="presentation" />
    );
  },

  UserIcon: () => {
    return <img src={UserIcon} alt="User icon" role="presentation" />;
  },

  UserIconRed: () => {
    return <img src={UserIconRed} alt="User icon error" role="presentation" />;
  },

  Settings: () => {
    return <img src={Settings} alt="Settings icon" role="presentation" />;
  },

  Add: () => {
    return <img src={Add} alt="Add icon" role="presentation" />;
  },

  Breakfast: () => {
    return <img src={Breakfast} alt="Breakfast icon" role="presentation" />;
  },

  Pets: () => {
    return <img src={Pets} alt="Pets icon" role="presentation" />;
  },

  Wifi: () => {
    return <img src={Wifi} alt="Wifi icon" role="presentation" />;
  },

  Parking: () => {
    return <img src={Parking} alt="Parking icon" role="presentation" />;
  },

  Reviews: () => {
    return <img src={Reviews} alt="Reviews icon" role="presentation" />;
  },

  Person: () => {
    return <img src={Person} alt="Person icon" role="presentation" />;
  },

  LocationWhite: () => {
    return <img src={LocationWhite} alt="Location icon" role="presentation" />;
  },

  WifiWhite: () => {
    return <img src={WifiWhite} alt="Wifi icon" role="presentation" />;
  },

  ParkingWhite: () => {
    return <img src={ParkingWhite} alt="Parking icon" role="presentation" />;
  },

  BreakfastWhite: () => {
    return (
      <img src={BreakfastWhite} alt="Breakfast icon" role="presentation" />
    );
  },

  PetsWhite: () => {
    return <img src={PetsWhite} alt="Pets icon" role="presentation" />;
  },

  BackgroundImg: {
    src: BackgroundImg,
    alt: "Background",
  },
};

export default Icons;
