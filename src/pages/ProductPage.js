import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import { formatPrice } from "../helper/helperFunctions";

export default function ProductPage() {
  //get prod Id from route
  const prodId = parseInt(useParams().id);
  //get product details
  const product = useSelector(selectProductById(prodId));
  console.log("product", product);

  return (
    <div className="container my-3">
      <div className="card mb-3 w-50">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={product.imageUrl}
              className="card-img"
              alt="image of product"
            />
            <h3 className="my-3">{formatPrice(product.price)}</h3>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
