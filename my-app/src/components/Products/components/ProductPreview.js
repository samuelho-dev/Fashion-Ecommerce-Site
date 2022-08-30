import React from "react";
import productData from "../productdata.json";

export default function ProductPreview() {
  const displayProduct = productData.map((product) => (
    <div className="image-container">
      <img src={product.img.src} alt="" />
      <h3>{product.designer.toUpperCase()}</h3>
      <p>{product.productName.toUpperCase()}</p>
      <p>{product.price}</p>
    </div>
  ));

  return <div className="display-container">{displayProduct}</div>;
}
