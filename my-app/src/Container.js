import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Frontpage from "./components/Frontpage/Frontpage";
import Designers from "../src/components/Designers/Designers";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Navigation/Footer";

export default function Container() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [userCart, setUserCart] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [userTotal, setUserTotal] = useState({
    subtotal: "",
    tax: "",
    total: "",
  });
  console.log(userFav);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1200;
  console.log(isMobile);
  return (
    <>
      <Navbar
        userTotal={userTotal}
        setUserTotal={setUserTotal}
        userCart={userCart}
        setUserCart={setUserCart}
        userFav={userFav}
        setUserFav={setUserFav}
        isMobile={isMobile}
      />
      <div className="container" id="main">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="*" element={<Frontpage />} />
          <Route path="home" element={<Frontpage />} />
          <Route path="designers" element={<Designers />} />
          <Route
            path="products"
            element={
              <Products
                userCart={userCart}
                setUserCart={setUserCart}
                userFav={userFav}
                setUserFav={setUserFav}
              />
            }
          />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
