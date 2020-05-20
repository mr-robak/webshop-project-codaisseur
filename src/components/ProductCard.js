import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/actions";
import { Link } from "react-router-dom";
import { selectItemById } from "../store/cart/selectors";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const { id, name, price, imageUrl } = props;

  const isInCart = useSelector(selectItemById(id));

  const addItemToCart = () => {
    dispatch(addToCart(id));
  };

  const showRemove = isInCart ? (
    <span>
      <button onClick={() => dispatch(removeFromCart(id))}>-</button>
      {isInCart.amount} in cart
    </span>
  ) : null;

  return (
    <div className="ProductCard">
      <Link to={`product/${id}`}>
        <img src={imageUrl} alt={name} />
      </Link>
      <p>{name}</p>
      <span>€ {price}</span> {showRemove}
      <button onClick={addItemToCart}>+</button>
    </div>
  );
}
