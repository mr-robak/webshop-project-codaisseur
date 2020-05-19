import React from "react";

export default function ItemInCart(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{props.price}</td>
      <td>{props.price * props.amount}</td>
    </tr>
  );
}
