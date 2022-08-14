import React from "react";
import productData from "../../Products/productdata.json";

//Uppercase Import
const designerArray = productData.map((product) =>
  product.designer.toUpperCase()
);

console.log(designerArray);

//Duplicate and Sort
const designerName = designerArray
  .filter(
    (designer, id, designerArray) => designerArray.indexOf(designer) === id
  )
  .sort((a, b) => a.localeCompare(b, "fr"));

//Define Array
const store = designerName.map((designer) => {
  return {
    designers: designer,
  };
});

console.log(store);
//Dropdown selection function
const Select = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default function FilterPanel() {
  //Save current state as nothing
  const [designer, setDesigner] = React.useState("red");
  //Submit and change option ???
  const handleChange = (e) => setDesigner(e.target.designer);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      designers: designer,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };

  return (
    <div className="filter-panel-container">
      <form onSubmit={handleSubmit}>
        {/* Filter by Price */}
        {/* Filter by Designer */}
        <div className="designer-filter">
          <label htmlFor="designers">
            <h3>Designers</h3>
            <Select value={designer} options={store} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
        {/* Filter by Size */}
        {/* Filter by Category */}
      </form>
    </div>
  );
}
