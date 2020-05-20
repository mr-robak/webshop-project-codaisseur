import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const prodId = useParams().id;
  return (
    <div>
      <h1>Test Product Page {prodId}</h1>
    </div>
  );
}
