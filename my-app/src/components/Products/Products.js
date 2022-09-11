import React, { useState } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products() {
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
      });
      console.log(productsByKey);
      // setDisplayedProducts((prevState) => {
      //   return [...prevState, ...productsByKey];
      // });
      setDisplayedProducts(productsByKey);
    }
  };

  function addToCart(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  //filter by filterCriteria
  //return productdata that meets FilterCriteria

  //Use Effect when filterCriteria changes
  // Rerender displayedProduct with filterCriteria

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
            addToCart={addToCart}
          />
        </div>
      </div>
    </>
  );
}
