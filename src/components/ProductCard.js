import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  //   console.log("props", props);
  const { id, name, price, imageUrl } = props;
  return (
    <div className="ProductCard">
      <p>{name}</p>
      <img src={imageUrl} alt={name} />
      <p>
        <span>€ {price}</span> <button>Add</button>
      </p>
    </div>
  );
}
