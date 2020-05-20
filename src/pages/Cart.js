import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectItemsInCart } from "../store/cart/selectors";
import ItemInCart from "../components/ItemInCart";
import { formatPrice } from "../helper/helperFunctions";
import { emptyCart } from "../store/cart/actions";

export default function Cart() {
  const dispatch = useDispatch();
  const emptyCartHandler = () => dispatch(emptyCart());
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
            <td>
              <b>total</b>
            </td>
            <td>{formatPrice(total)}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-secondary mx-2"
        onClick={emptyCartHandler}
      >
        Empty cart
      </button>
      <Link to="/checkout">
        <button type="button" className="btn btn-dark mx-2">
          Buy
        </button>
      </Link>
    </div>
  );
}
