import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/actions";

export default function AddToCartButton(props) {
  const dispatch = useDispatch();
  const addItem = () => dispatch(addToCart(props.id));
  return (
    <button type="button" className="btn btn-success mx-1" onClick={addItem}>
      +
    </button>
  );
}
