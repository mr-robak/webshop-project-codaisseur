import React, { useState, useEffect } from "react";
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
  //local state for total
  const [total, setTotal] = useState(0);
  const totalArr = [];
  useEffect(() => setTotal(totalArr), [totalArr]);
  const items = useSelector(selectItemsInCart);
  const addToTotal = (price) => totalArr.push(price);
  console.log("items length", items.length);
  console.log("totalArr length", totalArr.length);
  if (totalArr.length === items.length) {
    console.log("if is ture");
    setTotal(totalArr.reduce((acc, val) => acc + val));
  }
  console.log("totalArr", totalArr);
  console.log("total: ", total);

  return (
    <div className="container my-3">
      <h1>Your shopping cart</h1>
      <table className="table table-borderless table-hover">
        <tbody>
          {items.map((item) => {
            const itemId = parseInt(item.prodId);
            return (
              <ItemInCart
                key={itemId}
                id={itemId}
                amount={item.amount}
                calcTotal={addToTotal}
              />
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <b>total</b>
            </td>
            <td>
              €{total.length > 0 ? total.reduce((acc, val) => acc + val) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
