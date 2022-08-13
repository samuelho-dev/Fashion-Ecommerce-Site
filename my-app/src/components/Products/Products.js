import React from "react";
import productData from "../Products/productdata.json";

export default function Products() {
  const productArray = productData.map((element) => element.toUppercase());

  console.log(productArray);
  return (
    <div className="container">
      {productArray.map((products) => {
        return <div className="product-data">{products.productName}</div>;
      })}
    </div>
  );
}
