import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Frontpage from "./components/Frontpage/Frontpage";
import Designers from "../src/components/Designers/Designers";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import About from "./components/About/About";
import Cart from "../src/components/Products/Cart";
import Footer from "./components/Navigation/Footer";

export default function Container() {
  let content;
  switch (window.location.pathname) {
    case "/":
      content = <Frontpage />;
      break;
    case "/Home":
      content = <Frontpage />;
      break;
    case "/Designers":
      content = <Designers />;
      break;
    case "/Products":
      content = <Products />;
      break;
    case "/Articles":
      content = <Articles />;
      break;
    case "/About":
      content = <About />;
      break;
    case "/Cart":
      content = <Cart />;
      break;
  }
  return (
    <div>
      <Navbar />
      {content}
      <Footer />
    </div>
  );
}
