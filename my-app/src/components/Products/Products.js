import React, { useState } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products() {
  const [filterCriteria, setFilterCriteria] = useState({});
  // this.filterCriteria.state(
  //   { name: "designer", options: [] },
  //   { name: "category", options: [] },
  //   { name: "sizes", options: [] },
  //   { name: "color", options: [] }
  // );
  // console.log(filterCriteria);
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
            filterCriteria={filterCriteria}
            setFilterCriteria={setFilterCriteria}
          />
          <ProductDisplay />
        </div>
      </div>
    </div>
  );
}
