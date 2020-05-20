import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/actions";

export default function RemoveFromCartButton(props) {
  const dispatch = useDispatch();
  const removeItem = () => dispatch(removeFromCart(props.id));
  return (
    <button type="button" className="btn btn-danger mx-1" onClick={removeItem}>
      -
    </button>
  );
}
