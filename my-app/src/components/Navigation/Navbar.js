import { React, useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import icons from "../Utils/icons.json";

export default function Navbar({ userCart, setUserCart, isMobile }) {
  const [cartShown, setCartShown] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  //Update User Cart Details
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < userCart.length; i++) {
      count += Number(userCart[i].quantity);
      console.log(count);
    }
    setCartCount(count);
  }, [userCart]);

  const handleShoppingCart = (e) => {
    setCartShown((current) => !current);
  };

  return (
    <nav id="navbar">
      <div className="icon-container">
        <ul className="navbar-header">
          <div className="cart-icon">
            <img
              src={require("../../../public/imgs/icons/" +
                icons[10].source +
                ".svg")}
              alt={icons[10].source}
              onClick={handleShoppingCart}
            />
          </div>
          <div className="cart-num">{cartCount}</div>
          <img
            src={require("../../../public/imgs/icons/" +
              icons[5].source +
              ".svg")}
            alt={icons[5].source}
          />
        </ul>
      </div>
      {cartShown && (
        <ShoppingCart userCart={userCart} setUserCart={setUserCart} />
      )}
      <NavDisplay isMobile={isMobile} />
    </nav>
  );
}

function NavDisplay(props) {
  const [navShown, setNavShown] = useState(false);
  const [navBurger, setNavBurger] = useState(false);
  const handleMobileNav = (e) => {
    setNavShown((current) => !current);
  };
  if (props.isMobile === true) {
    return (
      <div className="navbar-container">
        <NavLink to="home">
          <h1>Streetwear Store</h1>
        </NavLink>
        {navBurger ? (
          <img
            src={require("../../../public/imgs/icons/" +
              icons[13].source +
              ".svg")}
            alt={icons[13].source}
            onClick={handleMobileNav}
          />
        ) : (
          <img
            src={require("../../../public/imgs/icons/" +
              icons[14].source +
              ".svg")}
            alt={icons[14].source}
            onClick={handleMobileNav}
          />
        )}
        {navShown && (
          <div className="navbar-link-container">
            <NavLink to="designers">
              <p>DESIGNERS</p>
            </NavLink>
            <NavLink to="products">
              <p>PRODUCTS</p>
            </NavLink>
            <NavLink to="articles">
              <p>ARTICLES</p>
            </NavLink>
            <NavLink to="contact">
              <p>CONTACT</p>
            </NavLink>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="navbar-container">
        <NavLink to="home">
          <h1>Streetwear Store</h1>
        </NavLink>
        <ul className="navbar-links">
          <NavLink to="designers">
            <p>DESIGNERS</p>
          </NavLink>
          <NavLink to="products">
            <p>PRODUCTS</p>
          </NavLink>
          <NavLink to="articles">
            <p>ARTICLES</p>
          </NavLink>
        </ul>
        <NavLink to="contact">
          <div className="contact-nav">Contact</div>
        </NavLink>
      </div>
    );
  }
}
