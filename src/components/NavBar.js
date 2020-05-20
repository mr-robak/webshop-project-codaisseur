import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../store/cart/selectors";
import cartImg from "../images/shop-cart-svgrepo-com.svg";

export default function NavBar() {
  const itemsInCart = useSelector(selectItemsInCart).length;

  // console.log("itemsInCart", itemsInCart);

  return (
    <div className="NavBar">
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
        className="NavLink2"
        activeClassName="NavLinkActive"
      >
        <img src={cartImg} className="cart" alt="" />
        <div className="txt">{itemsInCart !== 0 ? itemsInCart : null}</div>
      </NavLink>
    </div>
  );
}
