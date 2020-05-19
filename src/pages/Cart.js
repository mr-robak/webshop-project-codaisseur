import React from "react";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../store/cart/selectors";
import ItemInCart from "../components/ItemInCart";
import { selectProductById } from "../store/products/selectors";

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
  console.log("items", items);
  return (
    <div>
      <table>
        {items.map((item) => {
          return <ItemInCart id={parseInt(item.id)} />;
        })}
      </table>
    </div>
  );
}
