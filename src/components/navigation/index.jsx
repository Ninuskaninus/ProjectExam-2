import React from "react";
import { Nav, MenuList, MenuLogo } from "./index.styles";
import HamburgerMenu from "../hamburger";
import Icons from "../icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <Nav>
      <Link to="/">
        <MenuLogo>
          <h1>Holidaze</h1>
        </MenuLogo>
      </Link>
      <div>
        <HamburgerMenu />
        <MenuList>
          <li>
             <Icons.Arrow />
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Icons.Arrow />
            <Link to="/profile">
              <p>My venues</p>
            </Link>
          </li>
          <li>
            <Icons.Arrow />
            <Link to="/profile">
              <p>My Bookings</p>
            </Link>
          </li>
        </MenuList>
          {token ? <p onClick={logout}>Log out</p> : <Link to="/login"><p>Log in</p></Link>}
      </div>
    </Nav>
  );
}