import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsInCart } from "../store/cart/selectors";
import ItemInCart from "../components/ItemInCart";
import { formatPrice } from "../helper/helperFunctions";

/* TO-DO 
[] list items in html table, one row per item, with the following columns
    [x] name
    [] buttons to add/remove product
    [x] amount
    [x] single price 
[x] one row for total
[] one button to empty the cart
[] one button to buy stuff
*/

export default function Cart() {
  //local state for total
  const [total, setTotal] = useState(0);
  //totalArr for appending prices (used by the callback addToTotal)
  const totalArr = [0];
  //updating the total as new items are added
  useEffect(() => setTotal(totalArr.reduce((acc, val) => acc + val)), [
    totalArr,
  ]);
  //get items from store
  const items = useSelector(selectItemsInCart);
  //callback function for component ItemInCart
  const addToTotal = (price) => totalArr.push(price);

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
            <td></td>
            <td></td>
            <td>
              <b>total</b>
            </td>
            <td>{formatPrice(total)}</td>
          </tr>
        </tbody>
      </table>
      {/* <button type="button" className="btn btn-secondary" onClick={}>
        Empty cart
      </button> */}
    </div>
  );
}
