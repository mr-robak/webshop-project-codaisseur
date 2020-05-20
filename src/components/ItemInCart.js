import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import { removeFromCart, addToCart } from "../store/cart/actions";
import { formatPrice } from "../helper/helperFunctions";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

export default function ItemInCart(props) {
  const dispatch = useDispatch();
  //load product details
  const product = useSelector(selectProductById(props.id));
  //pass the total cost of the item to callback calcTotal (see Cart component)
  props.calcTotal(product.price * props.amount);
  const removeItem = () => dispatch(removeFromCart(product.id));
  const addItem = () => dispatch(addToCart(product.id));

  return (
    <tr>
      <td>{product.name}</td>
      <td>
        <RemoveFromCartButton id={product.id} />
        <AddToCartButton id={product.id} />
      </td>
      <td>{props.amount}x</td>
      <td>{formatPrice(product.price)}</td>
      <td>{formatPrice(product.price * props.amount)}</td>
    </tr>
  );
}
