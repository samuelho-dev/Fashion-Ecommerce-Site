import React, { useState, useEffect } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products({
  userCart,
  setUserCart,
  userFav,
  setUserFav,
}) {
  const filterCriteriaInitialState = {
    designer: [],
    sizes: [],
    color: [],
    category: [],
  };
  const [filterCriteria, setFilterCriteria] = useState(
    filterCriteriaInitialState
  );
  console.log(filterCriteria);

  const [displayedProducts, setDisplayedProducts] = useState(productData);
  const [sizeBtnSelected, setSizeBtnSelected] = useState(0);

  const filter = () => {
    let updatedDisplayedProducts = [];
    let count = 0;
    for (const filterKey in filterCriteria) {
      const currFilterArr = filterCriteria[filterKey];
      count += currFilterArr.length;
      if (count === 0) {
        setDisplayedProducts(productData);
      } else {
        updatedDisplayedProducts = productData.filter((obj) => {
          if (filterKey === "sizes") {
            return obj;
          } else if (currFilterArr.includes(obj[filterKey])) {
            return obj;
          }
        });
        setDisplayedProducts(updatedDisplayedProducts);
        console.log(displayedProducts);
        console.log(updatedDisplayedProducts);
      }
    }
  };
  //ADD TO FAVORITES
  function addToFav(obj) {
    console.log(obj);
    const foundID = userFav.find((favItem) => favItem.id === obj.id);
    console.log(foundID);
    if (!foundID) {
      setUserFav((prev) => [...prev, obj]);
    } else {
      alert("Item is already in your favorites");
    }
  }
  //ADD TO CART
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
  function handleSizeBtnClick(size, id) {
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
            filterCriteriaInitialState={filterCriteriaInitialState}
            filter={filter}
          />
          <ProductDisplay
            displayedProducts={displayedProducts}
            userCart={userCart} //CART
            setUserCart={setUserCart}
            addToCart={addToCart}
            userFav={userFav} //FAVORITES
            setUserFav={setUserFav}
            addToFav={addToFav}
            handleSizeBtnClick={handleSizeBtnClick}
            sizeBtnSelected={sizeBtnSelected}
          />
        </div>
      </div>
    </>
  );
}
