import React from "react";
import { useState } from 'react';

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function toggleIsInCart() {
    setIsInCart(!isInCart)
  }
  
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleIsInCart} className="add">{isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
