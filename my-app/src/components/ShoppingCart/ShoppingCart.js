import { React, useState } from "react";

export default function ShoppingCart({
  handleShoppingCart,
  userCart,
  setUserCart,
}) {
  console.log(userCart);
  return (
    <div className="container">
      <div className="cartposition">
        <div className="shoppingcart">
          <div className="cartheader">
            <h3>Your Cart</h3>
          </div>
          <ShoppingItem userCart={userCart} setUserCart={setUserCart} />
          <div className="checkout-container">
            <p>Your total is</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingItem({ userCart, setUserCart }) {
  const [itemCount, setItemCount] = useState(0);
  function handleQuantityUpdate() {
    console.log("quanitity updated");
  }
  console.log(userCart);
  if (userCart.length === 0) {
    return <div>You have nothing in this cart</div>;
  } else {
    return (
      <div className="cartitem-container">
        {userCart.map((product, index) => {
          return (
            <div className="item-container">
              <div className="item-details" key={index}>
                <img
                  src={require("../../../public/imgs/" + product.img + ".png")}
                  alt={product.productName.toUpperCase()}
                />
              </div>
              <div className="price-container">
                <h5>{product.designer.toUpperCase()}</h5>
                <p>
                  {product.productName.toUpperCase()} - {product.sizes}
                </p>
                <div className="price">
                  <input
                    type="number"
                    className="quantity-input"
                    min="0"
                    max="10"
                    value={itemCount}
                    onChange={handleQuantityUpdate}
                  />
                </div>
                {product.price}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
