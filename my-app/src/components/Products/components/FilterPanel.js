import React from "react";

function handleSubmit(e) {
  alert("Hello");
}

//Filter Categories
export default function FilterPanel({ products, setFilterCriteria }) {
  return (
    <div className="filter-panel-container">
      <form onSubmit={handleSubmit}>
        {/* Filter by Price */}
        <FilterModule />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function FilterModule({ products }) {
  const filterOptions = [
    { name: "designer", options: [...designerOptions] },
    { name: "category", options: [...categoryOptions] },
    { name: "sizes", options: [...sizesOptions] },
    { name: "color", options: [...colorOptions] },
  ];

  // Keys of products object
  // compare keys of product to sections
  // if true
  // return
  // label & input with array of product values

  return (
    //  { /* all four filters in one */ }
    // filterOptions.map(opt => (
    <div className="filter">
      <h3>Filter by Category</h3>
      <label>
        <input type="checkbox" />
        Here
      </label>
    </div>
  );
}
