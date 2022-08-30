import React from "react";
import FilterPanel from "./components/FilterPanel";
import ProductDisplay from "./components/ProductPreview";
import productData from "./productdata.json";

export default function Products() {
  // const [filter, setFilter] = useState("All");

  // const productData = product.filter(FILTER_MAP[filter]).map((product) => (
  //   <ProductDisplay
  //     id = {product.id}
  //     name= {product}
  //   />
  // ));
  return (
    <div className="container">
      <div className="content-container">
        <FilterPanel products={productData} />
      </div>
    </div>
  );
}
