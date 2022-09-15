import React, { useState } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products({ userCart, setUserCart }) {
  const [filterCriteria, setFilterCriteria] = useState({
    designer: [],
    sizes: [],
    color: [],
    category: [],
  });
  console.log(filterCriteria);

  const [displayedProducts, setDisplayedProducts] = useState(productData);

  let count = 0;
  const filter = () => {
    for (const filterKey in filterCriteria) {
      count += filterCriteria[filterKey].length;
    }
    console.log(count);
    if (count === 0) {
      setDisplayedProducts(productData);
    } else {
      let productsByKey = productData.filter((item) => {
        for (const filterKey in filterCriteria) {
          const currFilterArr = filterCriteria[filterKey];
          for (let i = 0; currFilterArr.length; i++) {
            const currFilter = currFilterArr[i];
            const currItem = item[filterKey].toUpperCase();
            // console.log(currFilter);
            // console.log(currItem);
            return currItem === currFilter;
          }
        }
        return item;
      });
      console.log(productsByKey);
      // setDisplayedProducts((prevState) => {
      //   return [...prevState, ...productsByKey];
      // });
      setDisplayedProducts(productsByKey);
    }
  };
  //ADD TO CART FUNCTIONALITY
  const [sizeBtnSelected, setSizeBtnSelected] = useState(0);
  function addToCart(obj) {
    //if id of userSelected != id of obj.id
    //return error - select a size
    if (obj.id === sizeBtnSelected.id) {
      const foundID = userCart.find((cartItem) => cartItem.id === obj.id);
      const foundSize = userCart.find(
        (cartItem) => cartItem.sizes === obj.sizes
      );
      if (!foundID || !foundSize) {
        setUserCart((prev) => [...prev, obj]);
      } else {
        alert("Item is already in your cart");
      }
    } else {
      alert(`Please select a size for ${obj.productName}`);
    }
  }
  function handleSizeBtnClick(size, id, i) {
    setSizeBtnSelected({ activeSizeBtn: size, id: id });
  }

  return (
    <>
      <div className="content-container">
        <div className="product-container">
          <FilterPanel
            products={productData}
            filterCriteria={filterCriteria}
            setFilterCriteria={setFilterCriteria}
            filter={filter}
          />
          <ProductDisplay
            displayedProducts={displayedProducts}
            userCart={userCart}
            setUserCart={setUserCart}
            addToCart={addToCart}
            handleSizeBtnClick={handleSizeBtnClick}
            sizeBtnSelected={sizeBtnSelected}
          />
        </div>
      </div>
    </>
  );
}
