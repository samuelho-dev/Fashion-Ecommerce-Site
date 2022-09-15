import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Frontpage from "./components/Frontpage/Frontpage";
import Designers from "../src/components/Designers/Designers";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import About from "./components/About/About";
import Footer from "./components/Navigation/Footer";

export default function Container() {
  const [userCart, setUserCart] = useState([]);

  return (
    <div>
      <Navbar userCart={userCart} setUserCart={setUserCart} />
      <div className="container" id="main">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="*" element={<Frontpage />} />
          <Route path="home" element={<Frontpage />} />
          <Route path="designers" element={<Designers />} />
          <Route
            path="products"
            element={<Products userCart={userCart} setUserCart={setUserCart} />}
          />
          <Route path="articles" element={<Articles />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
