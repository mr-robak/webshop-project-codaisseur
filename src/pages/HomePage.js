import React from "react";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductById,
} from "../store/products/selectors";
import ProductCard from "../components/ProductCard";

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
    <div>
      <h1>Products</h1>
      {renderProductCards}
    </div>
  );
}
