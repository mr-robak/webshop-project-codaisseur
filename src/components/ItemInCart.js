import React from "react";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";

export default function ItemInCart(props) {
  const productDetails = useSelector(selectProductById(parseInt(props.id)));
  console.log(productDetails);
  return (
    <h1>test item in cart </h1>
    // <tr>
    //   <td>{props.name}</td>
    //   <td>{props.amount}</td>
    //   <td>{props.price}</td>
    //   <td>{props.price * props.amount}</td>
    // </tr>
  );
}
