import React from "react";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";

export default function ItemInCart(props) {
  const product = useSelector(selectProductById(props.id));
  props.calcTotal(product.price * props.amount);
  return (
    <tr>
      <td>{product.name}</td>
      <td>{props.amount}x</td>
      <td>€{product.price}</td>
      <td>€{product.price * props.amount}</td>
    </tr>
  );
}
