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
          updatedFilter[key].splice(updatedFilter[key].indexOf(e.target.value));
        }
      }
    }
    setFilterCriteria(...filterCriteria, updatedFilter);
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
  const outputArray1 = productData.map((obj) => obj[moduleName].toUpperCase());
  const outputArray2 = outputArray1.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  //defined array output
  let filterArray = { name: moduleName, options: outputArray2 };

  return (
    <div className="filter">
      <label>
        <h3>Filter by {moduleName}</h3>
      </label>
      {filterArray.options.map((opt) => (
        <label>
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
