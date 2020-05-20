import React from "react";
import RemoveFromCartButton from "./RemoveFromCartButton";
import AddToCartButton from "./AddToCartButton";
import { formatPrice } from "../helper/helperFunctions";
import { useSelector } from "react-redux";
import { selectItemById } from "../store/cart/selectors";

export default function Product(props) {
  const item = useSelector(selectItemById(props.id));

  return (
    <div className="card mb-3 w-90">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.url} className="card-img" alt=" product" />
          <h3 className="my-3">{formatPrice(props.price)}</h3>
          <div className="row w-90">
            <RemoveFromCartButton id={props.id} />
            <h5>{item === undefined ? 0 : item.amount} in cart</h5>
            <AddToCartButton id={props.id} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
