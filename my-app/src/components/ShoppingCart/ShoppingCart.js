import { React, useState } from "react";

export default function ShoppingCart({ handleShoppingCart }) {
  return (
    <div className="container">
      <div className="cartposition">
        <div className="shoppingcart">
          <div className="cartheader">
            <h3>Your Cart</h3>
          </div>
          <ShoppingItem />
          <div className="checkout-container">
            <p>Your total is</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingItem() {
  return (
    <div className="item-container">
      <div className="item-details">
        <img src="/" alt="/" />
        <h5>Item name</h5>
        <p>Designer</p>
      </div>
      <CartItemChange />
    </div>
  );
}

function CartItemChange() {
  const [itemCount, setItemCount] = useState(0);
  function handleQuantityUpdate() {
    console.log("quanitity updated");
  }

  function addItem(e) {
    e.preventDefault();
    setItemCount(e.target.value++);
  }

  function removeItem(e) {
    e.preventDefault();
    setItemCount(e.target.value--);
  }
  return (
    <div className="price-container">
      <div className="price">
        <button onClick={removeItem}>-</button>
        <input
          type="text"
          inputMode="numeric"
          className="quantity-input"
          value={itemCount}
          onChange={handleQuantityUpdate}
        />
        <button onClick={addItem}>+</button>
      </div>
      <h5>Price</h5>
    </div>
  );
}
