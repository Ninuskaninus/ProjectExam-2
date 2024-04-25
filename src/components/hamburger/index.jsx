import React from "react";
import { useState } from "react";
import { Menu, MenuIcon } from "./index.styles";
import Icons from "../icons";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      {isOpen && (
        <Menu>
          <ul>
            <li>
              <Icons.Arrow />
              <h5>Home</h5>
            </li>
            <li>
              <Icons.Arrow />
              <h5>My venues</h5>
            </li>
            <li>
              <Icons.Arrow />
              <h5>My bookings</h5>
            </li>
          </ul>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;