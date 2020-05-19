import React from "react";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../store/cart/selectors";
import ItemInCart from "../components/ItemInCart";

/* TO-DO 
[] list items in html table, one row per item, with the following columns
    [x] name
    [] buttons to add/remove product
    [x] amount
    [x] single price 
[] one row for total
[] one button to empty the cart
[] one button to buy stuff
*/

export default function Cart() {
  //all items in cart
  const items = useSelector(selectItemsInCart);
  //get product info
  const productDetails = items.map((item) => {
    const id = parseInt(item.ProdId);
  });

  return (
    <div>
      <h1>Your shopping cart</h1>
      <table></table>
    </div>
  );
}
