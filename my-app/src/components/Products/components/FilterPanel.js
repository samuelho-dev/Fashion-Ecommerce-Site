import React, { useState } from "react";
import ProductPreview from "./ProductPreview";
import productData from "../../Products/productdata.json";

function handleSubmit(e) {
  alert("Hello");
}

//Filter Criteria Aggr.
// const FILTER_MAP = {
//   All: () => true,
//   Price: () => true,
//   Designer: () => true,
//   Sizes: () => true,
//   Category: () => true,

// };

//Filter Categories

function FilterModule(props) {
  console.log(props);
  const [selectionOptions, setSelectionOptions] = useState([props.designer]);
  return (
    <div className="filter">
      <select className="dropdown">
        {selectionOptions.map((designer, x) => (
          <option key={x} value={designer}>
            {designer}
          </option>
        ))}
      </select>
      <label htmlFor="">
        <input
          type="checkbox"
          id=""
          // onChange={handleQueryChange}
        />
        {props.designer}
      </label>
    </div>
  );
}

export default function FilterPanel(props) {
  const FILTER_NAMES = Object.keys(props);
  const [filterCriteria, setFilterCriteria] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterModule key={name} name={name} />
  ));

  return (
    <div className="product-container">
      <div className="filter-panel-container">
        <form onSubmit={handleSubmit}>
          {/* Filter by Price */}
          <div className="filter">
            <label htmlFor="price">
              <h3>Filter by Price</h3>
            </label>
          </div>
          {filterList}
          <button type="submit">Submit</button>
        </form>
      </div>
      <ProductPreview />
    </div>
  );
}
