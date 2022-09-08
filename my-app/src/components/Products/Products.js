import React, { useReducer, useRef, useState } from "react";
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

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'filterOn' :
  //       return
  //     case 'filterOff' :
  //       return productData
  //     default :
  //       return productData
  //   }
  // }

  // const [filterOnOff, dispatch] = useReducer(reducer, productData)
  const [displayedProducts, setDisplayedProducts] = useState(productData);
  let updatedProducts = [];

  const filter = () => {
    for (const key in filterCriteria) {
      const currFilter = filterCriteria[key];
      for (let i = 0; i < currFilter.length; i++) {
        console.log(currFilter[i].toUpperCase());
        console.log(key);
        productData.filter((obj) => {
          if (obj[key].toUpperCase() === currFilter[i].toUpperCase()) {
            return updatedProducts.push(obj);
          }
        });
      }
    }
    console.log(updatedProducts);
    setDisplayedProducts(updatedProducts);
  };

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
          <ProductDisplay displayedProducts={displayedProducts} />
        </div>
      </div>
    </>
  );
}
