import React, { useState } from "react";
import productData from "../productdata.json";

function handleSubmit(e) {
  console.log("Toggled");
}

//Filter Categories
export default function FilterPanel({ filterCriteria, setFilterCriteria }) {
  const [filterMsg, setFilterMsg] = useState([]);

  const filterToggle = (e, moduleName) => {
    let updatedMsg = [...filterMsg];

    if (e.target.checked) {
      updatedMsg = [...filterMsg, e.target.value];
    } else {
      updatedMsg.splice(filterMsg.indexOf(e.target.value), 1);
    }
    setFilterMsg(updatedMsg);
    setFilterCriteria({ ...filterCriteria, [moduleName]: e.target.value });
  };
  console.log(filterCriteria);
  return (
    <div className="filter-panel-container">
      <p>Current Filter : {filterMsg}</p>
      <form>
        {/* Filter by Price */}
        <FilterModule name="designer" filterToggle={filterToggle} />
        <FilterModule name="sizes" filterToggle={filterToggle} />
        <FilterModule name="color" filterToggle={filterToggle} />
        <FilterModule name="category" filterToggle={filterToggle} />
      </form>
    </div>
  );
}

function FilterModule(props) {
  const moduleName = props.name;

  //Import and reduce duplicate array
  const outputArray1 = productData.map((obj) => obj[moduleName].toUpperCase());
  const outputArray2 = outputArray1.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  let filterArray = { name: moduleName, options: outputArray2 };
  console.log(Array.isArray(outputArray2));
  return (
    <div className="filter">
      <h3>Filter by {moduleName}</h3>
      {filterArray.options.map((opt) => (
        <label>
          <input
            type="checkbox"
            value={opt}
            option={opt}
            key={opt}
            onChange={(e) => {
              props.filterToggle(e, moduleName);
            }}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
