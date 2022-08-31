import React, { useEffect, useState } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products() {
  const [filterCriteria, setFilterCriteria] = useState("All");
  // const [displayedProducts, setDisplayedProducts] = useState("");

  //filter by filterCriteria
  //return productdata that meets FilterCriteria

  //Use Effect when filterCriteria changes
  // Rerender displayedProduct with filterCriteria
  // useEffect(() => {
  //   console.log('filter updated')

  // },[filterCriteria])

  return (
    <div className="container">
      <div className="content-container">
        <div className="product-container">
          <FilterPanel
            products={productData}
            setFilterCriteria={setFilterCriteria}
          />
          <ProductDisplay filterCriteria={filterCriteria} />
        </div>
      </div>
    </div>
  );
}
