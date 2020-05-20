import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/products/selectors";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

export default function HomePage() {
  const [products, setProducts] = useState(useSelector(selectAllProducts));
  const [sort, setSort] = useState("default");
  // const [order, setOrder] = useState("");

  // const products = useSelector(selectAllProducts);

  // console.log(products);

  // const sortProducts = products;

  switch (sort) {
    case "price": {
      // console.log("switch", sort);
      products.sort((a, b) => a.price - b.price);
      break;
    }
    case "soldNr": {
      // console.log("switch", sort);
      products.sort((a, b) => b.soldNr - a.soldNr);
      break;
    }

    default:
      // console.log("switch", sort);
      break;
  }

  // if (order === "ascending") {
  //   const newProd = [...products].sort((a, b) => {
  //     return a.price - b.price;
  //   });
  //   // setProducts(newProd);
  // } else if (order === "descending") {
  //   const newProd = [...products].sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   console.log(newProd);
  //   // setProducts(newProd);
  // }

  // switch (order) {
  //   case "ascending": {
  //     console.log("switchA", sort);
  //     console.log("order", order);
  //     const newProd = [...products].sort((a, b) => a[sort] - b[sort]);
  //     setProducts(newProd);
  //     // console.log(products.map((p) => p[sort]));
  //     break;
  //   }
  //   case "descending": {
  //     console.log("switchD", sort);
  //     console.log("order", order);
  //     const newProd = [...products].sort((a, b) => b[sort] - a[sort]);
  //     setProducts(newProd);
  //     console.log(newProd);
  //     break;
  //   }

  //   default:
  //     console.log("switch Def", sort);
  //     console.log("order", order);
  //     break;
  // }

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

  // const showSelection =
  //   sort === "price" ? true : sort === "soldNr" ? true : false;

  return (
    <div className="HomePage">
      <label htmlFor="sort-by">Sort by:</label>
      <select
        id="sort-by"
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value=""> ------------ </option>
        <option value="price">price</option>
        <option value="soldNr">popularity</option>
        <option value="tags">tags</option>
      </select>{" "}
      {/* {showSelection ? (
        <select
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      ) : null} */}
      <p>{renderProductCards}</p>
    </div>
  );
}
