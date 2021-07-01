import React from "react";
import Item from "./Item";
import { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('All')
 
  const filteredArray = items.filter(item => {
    if (selectedCategory === 'All') {
      return true
    } else {
      return (item.category === selectedCategory)
    }
  })

  function handleFilter(e) {
    setCategory(e.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
