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

//Dropdown selection function
// const Select = ({ value, options, onChange }) => {
//   return (
//     <select value={value} onChange={onChange}>
//       {options.map((option) => {
//         return (
//           <option key={option.value} value={option.value}>
//             {option.text}
//           </option>
//         );
//       })}
//     </select>
//   );
// };

export default function FilterPanel() {
  //Save current state as nothing
  const [filterCriteria, setFilterCriteria] = React.useState({
    designers: [],
    categories: "",
    sizes: "",
  });
  const [filterResults, setFilterResults] = React.useState({});
  const sizes = ["s", "m", "l", "xl"];

  //Submit and change option ???
  const handleChange = (e, nameFilter) => {
    setFilterCriteria((prevState) => ({
      ...prevState,
      [nameFilter]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      designers: designer,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };
  console.log(store);
  console.log("hello", filterCriteria);

  return (
    <div className="filter-panel-container">
      <form onSubmit={handleSubmit}>
        {/* Filter by Price */}
        <div className="price-filter">
          <label htmlFor="price">
            <h3>Filter by Price</h3>
          </label>
        </div>

        {/* Filter by Designer */}
        <div className="designer-filter">
          <label htmlFor="designers">
            <h3>Filter by Designer</h3>
            <select
              value={filterCriteria.designers}
              onChange={(designer) => handleChange}
            >
              {store.map((names) => {
                console.log(names);
                return (
                  <option key={names.designers} value={names.designers}>
                    {names.designers}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Filter by Size */}
        <div className="size-filter">
          <label htmlFor="sizes">
            <h3>Filter by Sizes</h3>
            <select value="" onChange={handleChange}>
              {sizes.map((ele) => {
                return (
                  <option key={sizes.ele} value={sizes.ele}>
                    {sizes.ele}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Filter by Category */}
        <div className="category-filter">
          <label htmlFor="category">
            <h3>Filter by Category</h3>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
