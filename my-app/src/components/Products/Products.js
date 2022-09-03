import React, { useState } from "react";
import productData from "./productdata.json";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductDisplay";

export default function Products() {
  const [filterCriteria, setFilterCriteria] = useState([]);
  const [filteredProducts, setFilteredProduct] = useState(productData);

  const filter = () => {
    for (const filter in filterCriteria) {
      console.log(filterCriteria);
      console.log(filter);
      if (filter === "designer") {
        setFilteredProduct(
          filteredProducts[filter].filter((item) =>
            item.toUpperCase().includes(filterCriteria[filter])
          )
        );
      } else if (filter === "sizes") {
        setFilteredProduct(
          filteredProducts[filter].filter((item) =>
            item.toUpperCase().includes(filterCriteria[filter])
          )
        );
      } else if (filter === "color") {
        setFilteredProduct(
          filteredProducts[filter].filter((item) =>
            item.toUpperCase().includes(filterCriteria[filter])
          )
        );
      } else if (filter === "category") {
        setFilteredProduct(
          filteredProducts[filter].filter((item) =>
            item.toUpperCase().includes(filterCriteria[filter])
          )
        );
      } else {
        return;
      }
    }
    console.log(filteredProducts);
  };
  // const [displayedProducts, setDisplayedProducts] = useState("");

  //filter by filterCriteria
  //return productdata that meets FilterCriteria

  //Use Effect when filterCriteria changes
  // Rerender displayedProduct with filterCriteria

  return (
    <div className="container">
      <div className="content-container">
        <div className="product-container">
          <FilterPanel
            products={productData}
            filterCriteria={filterCriteria}
            setFilterCriteria={setFilterCriteria}
            filter={filter}
          />
          <ProductDisplay
            filterCriteria={filterCriteria}
            products={productData}
          />
        </div>
      </div>
    </div>
  );
}
