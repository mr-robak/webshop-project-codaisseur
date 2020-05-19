import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact={true}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
      <NavLink
        to="/cart"
        exact={true}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Cart
      </NavLink>
    </div>
  );
}
