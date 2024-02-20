import React, { useState } from "react";

function CategoryFilter({CATEGORIES, handleFilter}) {
  const [selected, setSelected] = useState("")
  const changeSelected = (category) => {
    setSelected(category)
    handleFilter(category)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {CATEGORIES.map(category => {
          return <button key={category} style={{padding: "2px"}} onClick={() => changeSelected(category)} className={selected === category ? "selected" : ""}>{category}</button>
        })}
    </div>
  );
}

export default CategoryFilter;
