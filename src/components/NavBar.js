import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../store/cart/selectors";

export default function NavBar() {
  const itemsInCart = useSelector(selectItemsInCart).length;

  console.log("itemsInCart", itemsInCart);

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
        Cart<strong>{itemsInCart !== 0 ? `: ${itemsInCart}` : null}</strong>
      </NavLink>
    </div>
  );
}
