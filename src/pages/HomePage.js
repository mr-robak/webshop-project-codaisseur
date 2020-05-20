import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts, selectAllTags } from "../store/products/selectors";
import ProductCard from "../components/ProductCard";

import "./HomePage.css";

export default function HomePage() {
  const [sort, setSort] = useState("default");
  const [order, setOrder] = useState("");

  const tags = useSelector(selectAllTags);
  const [tagState, setTagState] = useState([...tags].map((tag) => false));

  let products = useSelector(selectAllProducts);

  const toggleTag = (event, button) => {
    // console.log(buttTag);
    const buttonIndex = parseInt(event.target.value);
    // console.log("button inx typeof", typeof buttonIndex);
    // console.log(!tagState[buttonIndex]);
    const newState = tagState.map((t, i) => {
      // console.log("buttn In", buttonIndex, "map index", i, i === buttonIndex);
      return i === buttonIndex ? !t : t;
    });

    setTagState(newState);
    //
  };

  const renderTags =
    sort !== "tags"
      ? null
      : tags.map((tag, index) => {
          const clss = tagState[index] ? "tagOn" : "tagOff";
          return (
            <button
              key={index}
              value={index}
              onClick={(e) => toggleTag(e, { tag })}
              className={clss}
            >
              {tag}
            </button>
          );
        });

  // console.log(products);

  switch (sort) {
    case "price": {
      products.sort((a, b) => a.price - b.price);
      break;
    }
    case "soldNr": {
      products.sort((a, b) => b.soldNr - a.soldNr);
      break;
    }
    case "tags": {
      // console.log("tags switch");
      const selcteTags = [...tags].filter((t, i) => tagState[i]);
      const filterProd = products.filter(
        (prod) => prod.tags.some((tag) => selcteTags.includes(tag))
        // return prod.tags.some((tag) => selcteTags.includes(tag));
      );
      // console.log("filtered products", filterProd);
      // setProducts([...filterProd]);
      products = filterProd;
      break;
    }

    default:
      break;
  }

  if (order === "ascending") {
    products.sort((a, b) => a[sort] - b[sort]);
  } else if (order === "descending") {
    products.sort((a, b) => b[sort] - a[sort]);
  }

  const renderProductCards = products.map((product, index) => {
    const { id, name, price, imageUrl } = product;
    return (
      <ProductCard
        key={index + name}
        name={name}
        id={id}
        price={price}
        imageUrl={imageUrl}
      />
    );
  });

  const showSelection =
    sort === "price" ? true : sort === "soldNr" ? true : false;

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
      {showSelection ? (
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      ) : null}{" "}
      {renderTags}
      <p>{renderProductCards}</p>
    </div>
  );
}
