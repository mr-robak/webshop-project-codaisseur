import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/products/selectors";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

export default function HomePage() {
  const products = useSelector(selectAllProducts);

  console.log(products);

  const renderProductCards = products.map((product, index) => {
    const { id, name, price, imageUrl } = product;
    return (
      <ProductCard
        key={index}
        name={name}
        id={id}
        price={price}
        imageUrl={imageUrl}
      />
    );
  });

  return (
    <div className="HomePage">
      <label for="sort-by">Sort by:</label>
      <select id="sort-by"></select>
      <p>{renderProductCards}</p>
    </div>
  );
}
