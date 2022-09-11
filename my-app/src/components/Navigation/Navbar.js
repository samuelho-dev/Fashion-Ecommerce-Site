import React from "react";
import UserSVG from "../images/icons/user.svg";
import FavoritesSVG from "../images/icons/heart.svg";
import ShoppingCartSVG from "../images/icons/shopping-cart.svg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Navbar() {
  const handleShoppingCart = (e) => {
    console.log(e.target.id);
  };

  return (
    <nav id="navbar">
      <div className="icon-container">
        <ul className="navbar-header">
          <div className="cart-icon">
            <a href={ShoppingCartSVG}>
              <img src={ShoppingCartSVG} alt="/" onClick={handleShoppingCart} />
            </a>
          </div>
          <div className="cart-num">3</div>
          <CustomLink href="/favorites">
            <img src={FavoritesSVG} alt="/" />
          </CustomLink>
          <CustomLink href="/user">
            <img src={UserSVG} alt="/" />
          </CustomLink>
        </ul>
      </div>
      <ShoppingCart handleShoppingCart={handleShoppingCart} />
      <div className="navbar-container">
        <CustomLink href="/Home" className="logo">
          <h1>Streetwear Store</h1>
        </CustomLink>
        <ul className="navbar-links">
          <CustomLink href="/Designers">
            <p>DESIGNERS</p>
          </CustomLink>
          <CustomLink href="/Products">
            <p>PRODUCTS</p>
          </CustomLink>
          <CustomLink href="/Articles">
            <p>ARTICLES</p>
          </CustomLink>
          <CustomLink href="/About">
            <p>ABOUT</p>
          </CustomLink>
        </ul>
        <div className="searchwrapper">
          <label htmlFor="search" />
          <input
            type="search"
            id="search"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
