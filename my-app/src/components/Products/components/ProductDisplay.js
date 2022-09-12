import { React, useEffect } from "react";

export default function ProductDisplay({
  displayedProducts,
  addToCart,
  userCart,
  setUserCart,
}) {
  function addToCart(index) {
    const currCart = displayedProducts[index];
    if (!userCart.includes(currCart)) {
      setUserCart((prev) => [...prev, currCart]);
    } else {
      alert("Item is already in your cart");
    }
    console.log(userCart);
  }

  useEffect(() => {
    console.log("cart updated");
  }, [userCart]);

  // const sizeBtn = product.sizes.map((sizes, index) => {
  //   return (
  //     <button className="userSelectedSizes" key={index}>
  //       <p>{sizes}</p>
  //     </button>
  //   );
  // });

  return (
    <div className="display-container">
      {displayedProducts.map((product, index) => {
        return (
          <div className="product-details" key={product.id}>
            <div className="product-img">
              <img
                src={require("../../../../public/imgs/" + product.img + ".png")}
                alt={product.productName.toUpperCase()}
              />
            </div>
            <h5>{product.designer.toUpperCase()}</h5>
            <p>{product.productName.toUpperCase()}</p>
            <p>${product.price}</p>
            <button
              onClick={() => {
                addToCart(index);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
