import React from "react";

export default function ProductDisplay({ displayedProducts }) {
  const displayProduct = displayedProducts.map((product) => (
    <div className="product-details">
      <div className="product-img">
        <img src="/" alt="/" />
      </div>
      <h5>{product.designer.toUpperCase()}</h5>
      <p>{product.productName.toUpperCase()}</p>
      <p>${product.price}</p>
    </div>
  ));
  return <div className="display-container">{displayProduct}</div>;
}
