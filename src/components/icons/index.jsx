import React from "react";
import Arrow from "../../assets/icons/arrow_green.png";
import Logo from "../../assets/icons/logo.png";
import Mail from "../../assets/icons/mail_green.png";
import MailRed from "../../assets/icons/mail_red.png";
import Password from "../../assets/icons/password_green.png";
import PasswordRed from "../../assets/icons/password_red.png";
import UserIcon from "../../assets/icons/id_green.png";
import UserIconRed from "../../assets/icons/id_red.png";

import BackgroundImg from "../../assets/images/background.avif";


const Icons = {
  Arrow: () => {
      return (
      <img src={Arrow} alt="Arrow icon" role="presentation" />
    );
  },
  Logo: () => {
    return (
      <img src={Logo} alt="Holidaze logo icon" role="presentation" />
    );
  },
  Mail: () => {
    return (
      <img src={Mail} alt="Mail icon" role="presentation" />
    );
  },

  MailRed: () => {
    return (
      <img src={MailRed} alt="Mail icon error" role="presentation" />
    );
  },

  Password: () => {
    return (
      <img src={Password} alt="Password icon" role="presentation" />
    );
  },

  PasswordRed: () => {
    return (
      <img src={PasswordRed} alt="Password icon error" role="presentation" />
    );
  },

  UserIcon: () => {
    return (
      <img src={UserIcon} alt="User icon" role="presentation" />
    );
  },

  UserIconRed: () => {
    return (
      <img src={UserIconRed} alt="User icon error" role="presentation" />
    );
  },

  BackgroundImg: {
    src: BackgroundImg,
    alt: "Background",
  }
}

export default Icons;