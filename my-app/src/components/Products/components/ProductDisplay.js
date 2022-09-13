import { React } from "react";

export default function ProductDisplay({
  displayedProducts,
  addToCart,
  userCart,
  setUserCart,
}) {
  let userSelection = "";
  function userSizeSelection(e) {
    userSelection = e.target.value;
    console.log(userSelection);
  }

  function addToCart(obj) {
    const found = userCart.find((cartItem) => cartItem.id === obj.id);
    console.log(found);
    if (!found) {
      setUserCart((prev) => [...prev, obj]);
    } else {
      alert("Item is already in your cart");
    }
  }

  return (
    <div className="display-container">
      {displayedProducts.map((product) => {
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
            <div className="sizebtn-container" onClick={userSizeSelection}>
              {product.sizes.map((size) => {
                return (
                  <div class="sizebtn">
                    <input type="radio" />
                    <label htmlFor="">{size.toUpperCase()}</label>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  designer: product.designer,
                  sizes: product.sizes[userSelection],
                  productName: product.productName,
                  img: product.img,
                  price: product.price,
                  quantity: 1,
                });
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
