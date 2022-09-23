import React, { useState } from "react";
import productData from "../productdata.json";
import icons from "../../Utils/icons.json";

//Filter Categories

export default function FilterPanel({
  filterCriteria,
  setFilterCriteria,
  filterCriteriaInitialState,
  filter,
}) {
  const [showFilterContainer, setShowFilterContainer] = useState({
    designer: false,
    sizes: false,
    color: false,
    category: false,
  });
  const [checkedFilter, setCheckedFilter] = useState({});

  console.log(checkedFilter);
  const moduleNames = ["designer", "sizes", "color", "category"];

  const handleFilterDropdown = (e, moduleName) => {
    let updatedshowFilterContainer = { ...showFilterContainer };
    setShowFilterContainer({
      [moduleName]: !updatedshowFilterContainer[moduleName],
    });
  };

  const filterToggle = (e, moduleName, functionType, index) => {
    let updatedFilter = { ...filterCriteria };
    console.log(index);
    //Loop --- duplicate
    if (functionType === "input-dropdown") {
      for (const key in updatedFilter) {
        //Check if box is checked
        if (e.target.checked) {
          if (key === moduleName) {
            updatedFilter[key].push(e.target.value);
          }
        } else {
          if (key === moduleName) {
            updatedFilter[key] = updatedFilter[key].filter(
              (x) => x !== e.target.value
            );
          }
        }
      }
    } else if (functionType === "input-delete") {
      updatedFilter[moduleName] = updatedFilter[moduleName].filter(
        (x) => x !== updatedFilter[moduleName][index]
      );
    } else if (functionType === "input-reset") {
      updatedFilter[moduleName] = filterCriteriaInitialState[moduleName];
    }
    setFilterCriteria(updatedFilter);
    filter();
  };

  return (
    <div className="filterpanel-container">
      <form>
        {/* Filter by Price */}
        {moduleNames.map((module) => {
          return (
            <FilterModule
              name={module}
              filterToggle={filterToggle}
              filterCriteria={filterCriteria}
              showFilterContainer={showFilterContainer}
              setShowFilterContainer={setShowFilterContainer}
              handleFilterDropdown={handleFilterDropdown}
            />
          );
        })}
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
  let filterArray = { moduleName: moduleName, options: outputArray };
  const [checkedFilter, setCheckedFilter] = useState({
    [moduleName]: new Array(outputArray.length).fill(false),
  });

  return (
    <div className="filter">
      <label>
        <h3>Filter by {moduleName}</h3>
      </label>
      <div className="filter-container">
        <div className="selected-filter-container">
          <div className="filter-inner-container">
            {props.filterCriteria[moduleName].map((selected, index) => (
              <div className="selected-filters" key={index}>
                <p>{selected}</p>
                <img //X Square Grey
                  src={require("../../../../public/imgs/icons/" +
                    icons[15].source +
                    ".svg")}
                  alt={icons[15].name}
                  onClick={(e) => {
                    props.filterToggle(e, moduleName, "input-delete", index);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="filter-button-container">
          <img //X Circle Grey
            src={require("../../../../public/imgs/icons/" +
              icons[16].source +
              ".svg")}
            alt={icons[16].name}
            onClick={(e) => {
              props.filterToggle(e, moduleName, "input-reset");
            }}
          />
          <img //Chevron Down Grey
            src={require("../../../../public/imgs/icons/" +
              icons[17].source +
              ".svg")}
            alt={icons[17].name}
            onClick={(e) => {
              props.handleFilterDropdown(e, moduleName);
            }}
          />
        </div>
      </div>
      {props.showFilterContainer[moduleName] && (
        <div className="filter-options-container">
          {filterArray.options.map((opt, index) => (
            <div key={index} className="filter-option">
              <input //Filter options
                type="checkbox"
                value={opt}
                onClick={(e) => {
                  props.filterToggle(e, moduleName, "input-dropdown", index);
                }}
              />
              <p>{opt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
