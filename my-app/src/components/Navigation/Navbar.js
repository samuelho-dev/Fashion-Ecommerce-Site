import { React, useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../Navigation/components/ShoppingCart";
import Favorites from "../Navigation/components/Favorites";
import icons from "../Utils/icons.json";

export default function Navbar({
  userCart,
  setUserCart,
  userFav,
  setUserFav,
  isMobile,
  userTotal,
  setUserTotal,
}) {
  const [cartShown, setCartShown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favShown, setFavShown] = useState(false);
  console.log(userFav);
  //Navbar Menu Toggles
  const handleNavMenuToggle = (e, toggle) => {
    if (toggle === "shoppingcart") {
      if (!favShown) {
        setCartShown(!cartShown);
      } else {
        setFavShown(!favShown);
        setCartShown(!cartShown);
      }
    } else if (toggle === "favorites") {
      if (!cartShown) {
        setFavShown(!favShown);
      } else {
        setFavShown(!favShown);
        setCartShown(!cartShown);
      }
    }
  };
  console.log(userFav);
  //Update User Cart Details
  useEffect(() => {
    let count = 0;
    let subtotal = 0;
    let tax = 0;
    for (let i = 0; i < userCart.length; i++) {
      count += Number(userCart[i].quantity);
      subtotal += Number(userCart[i].price * count);
      tax += subtotal * 0.075;
    }
    let total = subtotal + tax;
    setCartCount(count);
    setUserTotal({ subtotal: subtotal, tax: tax, total: total });
  }, [userCart, setUserTotal]);

  return (
    <nav id="navbar">
      <div className="icon-container">
        <div className="navbar-header">
          <div className="cart-icon">
            <img //Shopping Cart
              src={require("../../../public/imgs/icons/" +
                icons[10].source +
                ".svg")}
              alt={icons[10].source}
              onClick={(e) => handleNavMenuToggle(e, "shoppingcart")}
            />
          </div>
          <div className="cart-num">{cartCount}</div>
          <img //Favorites
            src={require("../../../public/imgs/icons/" +
              icons[5].source +
              ".svg")}
            alt={icons[5].source}
            onClick={(e) => handleNavMenuToggle(e, "favorites")}
          />
        </div>
      </div>
      {favShown && <Favorites userFav={userFav} setUserFav={setUserFav} />}
      {cartShown && (
        <ShoppingCart
          userCart={userCart}
          setUserCart={setUserCart}
          userTotal={userTotal}
        />
      )}
      <NavDisplay isMobile={isMobile} />
    </nav>
  );
}

function NavDisplay(props) {
  const [navShown, setNavShown] = useState(false);
  const [navBurgerState, setNavBurgerState] = useState(true);

  const handleMobileNav = (e) => {
    setNavShown((current) => !current);
    setNavBurgerState((current) => !current);
  };
  if (props.isMobile === true) {
    return (
      <div className="navbar-container">
        <NavLink to="home">
          <h1>Streetwear Store</h1>
        </NavLink>
        {navBurgerState ? (
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
