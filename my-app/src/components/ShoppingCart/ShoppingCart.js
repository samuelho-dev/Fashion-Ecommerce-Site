import { React, useState } from "react";

export default function ShoppingCart({ userCart, setUserCart }) {
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
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let updatedCart = [...userCart];
  const itemPrice = (e, index) => {
    updatedCart[index].quantity = e.target.value;
    setUserCart(updatedCart);
    // quantity: Number(e.target.value),
    // price: Number(product.price * e.target.value)
  };
  function removeFromCart(id) {
    updatedCart = updatedCart.filter((obj) => obj.id !== id);
    setUserCart(updatedCart);
  }

  if (userCart.length === 0) {
    return <div>You have nothing in this cart</div>;
  } else {
    return (
      <div className="cartitem-container">
        {userCart.map((product, userCartIndex) => {
          return (
            <div className="item-container" key={userCartIndex}>
              <div className="item-details">
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
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    trash
                  </button>
                  <select
                    name="p"
                    id=""
                    onChange={(e) => {
                      itemPrice(e, userCartIndex);
                    }}
                  >
                    {options.map((el) => {
                      return <option value={el}>{el}</option>;
                    })}
                  </select>
                </div>
                USD : ${(product.price * product.quantity).toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
