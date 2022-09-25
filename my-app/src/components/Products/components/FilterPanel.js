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
    //FILTER DROPDOWN
    designer: false,
    sizes: false,
    color: false,
    category: false,
  });

  const moduleOptions = {
    //FOR MODULE OPTIONS AND CHECKBOX
    designer: { option: [], checkbox: [] },
    sizes: { option: [], checkbox: [] },
    color: { option: [], checkbox: [] },
    category: { option: [], checkbox: [] },
  };

  for (const obj of productData) {
    for (const module in moduleOptions) {
      if (module === "sizes") {
        obj[module].forEach((el) => {
          if (!moduleOptions[module].option.includes(el.toUpperCase())) {
            moduleOptions[module].option.push(el);
          }
        });
      } else {
        if (!moduleOptions[module].option.includes(obj[module].toUpperCase())) {
          moduleOptions[module].option.push(obj[module].toUpperCase());
        }
      }
      const checkBox = new Array(moduleOptions[module].option.length).fill(
        false
      );
      moduleOptions[module].checkbox = checkBox;
    }
  }
  console.log(moduleOptions);

  const handleFilterDropdown = (e, moduleName) => {
    let updatedshowFilterContainer = { ...showFilterContainer };
    setShowFilterContainer({
      [moduleName]: !updatedshowFilterContainer[moduleName],
    });
  };

  const filterToggle = (e, moduleName, functionType, index) => {
    let updatedFilter = { ...filterCriteria };
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
    filter(updatedFilter);
  };

  return (
    <div className="filterpanel-container">
      {/* Filter by Price */}
      {Object.keys(moduleOptions).map((module) => {
        return (
          <FilterModule
            name={module}
            filterToggle={filterToggle}
            filterCriteria={filterCriteria}
            moduleOptions={moduleOptions}
            showFilterContainer={showFilterContainer}
            setShowFilterContainer={setShowFilterContainer}
            handleFilterDropdown={handleFilterDropdown}
          />
        );
      })}
    </div>
  );
}

function FilterModule(props) {
  const moduleName = props.name;
  const defaultCheckedState = props.moduleOptions[moduleName].checkbox;
  const [checked, setChecked] = useState(defaultCheckedState);

  const inputDelete = (event, selected, functionType) => {
    let checkboxIndex;
    if (functionType === "item") {
      for (let i = 0; i < defaultCheckedState.length; i++) {
        if (props.moduleOptions[moduleName].option[i] === selected) {
          checkboxIndex = i;
          console.log(checkboxIndex);
        }
      }
      console.log(checkboxIndex);
      setChecked((prevState) =>
        prevState.map((checkbox, i) =>
          i === checkboxIndex ? !checkbox : checkbox
        )
      );
    } else if (functionType === "clear-all") {
      setChecked(defaultCheckedState);
    }
  };
  console.log(checked);
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
                    inputDelete(e, selected, "item");
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
              inputDelete(e, null, "clear-all");
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
          {props.moduleOptions[moduleName].option.map((opt, index) => (
            <div key={index} className="filter-option">
              <input //Filter options
                type="checkbox"
                value={opt}
                checked={checked[index]}
                onChange={(e) => {
                  props.filterToggle(e, moduleName, "input-dropdown", index);
                  inputDelete(e, opt, "item");
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
