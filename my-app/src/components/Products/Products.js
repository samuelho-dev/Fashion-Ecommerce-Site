import React from "react";
import FilterPanel from "./components/FilterPanel";
import List from "./components/ProductList";
import Searchbar from "./components/Searchbar";

export default function Products() {
  return (
    <div className="container">
      <Searchbar />
      <div className="content-container">
        <FilterPanel />
        <List />
      </div>
    </div>
  );
}
