import React from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/actions";

export default function ProductCard(props) {
  //   console.log("props", props);
  const dispatch = useDispatch();

  const { id, name, price, imageUrl } = props;

  const addItemToCart = () => {
    dispatch(addToCart(id));
    // console.log("clicked!!!", id);
  };
  return (
    <div className="ProductCard">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <span>€ {price}</span> <button onClick={addItemToCart}>Add</button>
    </div>
  );
}
