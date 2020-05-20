import React from "react";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import { prettyDOM } from "@testing-library/react";

export default function ItemInCart(props) {
  const product = useSelector(selectProductById(props.id));

  return (
    <tr>
      <td>{product.name}</td>
      <td>{props.amount}x</td>
      <td>€{product.price}</td>
      <td>€{product.price * props.amount}</td>
    </tr>
  );
}
