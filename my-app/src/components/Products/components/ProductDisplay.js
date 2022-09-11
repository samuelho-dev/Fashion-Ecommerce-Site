import React from "react";

export default function ProductDisplay({ displayedProducts, addToCart }) {
  return (
    <div className="display-container">
      {displayedProducts.map((product, index) => {
        return (
          <div className="product-details" key={index}>
            <div className="product-img">
              <img
                src={require("../../../../public/imgs/" + product.img + ".png")}
                alt={product.productName.toUpperCase()}
              />
            </div>
            <h5>{product.designer.toUpperCase()}</h5>
            <p>{product.productName.toUpperCase()}</p>
            <p>${product.price}</p>

            {/* {product.sizes.map((sizes, index) => {
              return (
                <button className="userSelectedSizes" key={index}>
                  <p>{sizes}</p>
                </button>
              );
            })} */}
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
