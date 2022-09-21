import { React } from "react";
import icons from "../Utils/icons.json";

export default function ShoppingCart({ userCart, setUserCart, userTotal }) {
  let updatedCart = [...userCart];
  const itemPrice = (e, index) => {
    updatedCart[index].quantity = e.target.value;
    setUserCart(updatedCart);
    // quantity: Number(e.target.value),
    // price: Number(product.price * e.target.value)
  };
  function removeFromCart(userCartIndex) {
    updatedCart = updatedCart.filter(
      (obj) => obj !== updatedCart[userCartIndex]
    );
    setUserCart(updatedCart);
  }
  return (
    <div className="cartposition">
      <div className="shoppingcart">
        <div className="cartheader">
          <h3>Your Cart</h3>
        </div>
        <ShoppingItem
          userCart={userCart}
          itemPrice={itemPrice}
          removeFromCart={removeFromCart}
        />
        <div className="cartcenter">
          <div className="checkout-container">
            <h5>Subtotal : ${userTotal.subtotal.toLocaleString()}</h5>
            <h5>Tax : ${userTotal.tax.toLocaleString()}</h5>
            <h4>Your total is ${userTotal.total.toLocaleString()}</h4>
            <button className="checkout-btn">
              <h5>Checkout</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingItem({ userCart, itemPrice, removeFromCart }) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                  src={require("../../../public/imgs/" +
                    product.img[0] +
                    ".png")}
                  alt={product.productName.toUpperCase()}
                />
              </div>
              <div className="price-container">
                <h5>{product.designer.toUpperCase()}</h5>
                <p>
                  {product.productName.toUpperCase()} -{" "}
                  {product.sizes.toUpperCase()}
                </p>
                <div className="price">
                  <div className="cartBtns">
                    <img
                      src={require("../../../public/imgs/icons/" +
                        icons[12].source +
                        ".svg")}
                      alt={product.productName}
                      onClick={() => {
                        removeFromCart(userCartIndex);
                      }}
                    />
                    <select
                      name="selectnumber"
                      onChange={(e) => {
                        itemPrice(e, userCartIndex);
                      }}
                    >
                      {options.map((el) => {
                        return <option value={el}>{el}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <h5>
                  USD : ${(product.price * product.quantity).toLocaleString()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
