import React, { useState } from "react";
import productData from "../productdata.json";

//Filter Categories
export default function FilterPanel({
  filterCriteria,
  setFilterCriteria,
  filter,
}) {
  const [filterMsg, setFilterMsg] = useState([]);

  const filterToggle = (e, moduleName) => {
    let updatedMsg = [...filterMsg];
    let updatedFilter = { ...filterCriteria };

    //Loop --- duplicate
    for (const key in updatedFilter) {
      //Check if box is checked
      if (e.target.checked) {
        updatedMsg = [...filterMsg, e.target.value];
        if (key === moduleName) {
          updatedFilter[key].push(e.target.value);
        }
      } else {
        updatedMsg.splice(filterMsg.indexOf(e.target.value), 1);
        if (key === moduleName) {
          // updatedFilter[key].splice(updatedFilter[key].indexOf(e.target.value));
          updatedFilter[key] = updatedFilter[key].filter(
            (x) => x !== e.target.value
          );
        }
      }
    }
    setFilterCriteria(updatedFilter);
    setFilterMsg(updatedMsg);
    filter();
  };
  return (
    <div className="filterpanel-container">
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

  //Import and reduce duplicates in array
  let outputArray = [];
  for (const obj of productData) {
    if (moduleName === "sizes") {
      obj[moduleName].forEach((el) => {
        if (!outputArray.includes(el.toUpperCase())) {
          outputArray.push(el);
        }
      });
    } else {
      if (!outputArray.includes(obj[moduleName].toUpperCase())) {
        outputArray.push(obj[moduleName].toUpperCase());
      }
    }
  }
  //defined array output
  let filterArray = { name: moduleName, options: outputArray };

  return (
    <div className="filter">
      <label>
        <h3>Filter by {moduleName}</h3>
      </label>
      {filterArray.options.map((opt, index) => (
        <label key={index}>
          <div className="filter-item">
            <input
              type="checkbox"
              value={opt}
              onClick={(e) => {
                props.filterToggle(e, moduleName);
              }}
            />
            <p>{opt}</p>
          </div>
        </label>
      ))}
    </div>
  );
}
