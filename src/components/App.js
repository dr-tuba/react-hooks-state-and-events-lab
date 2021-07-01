import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const [mode, setMode] = useState(false)

  const appClass = mode ? "App dark" : "App light"

  function toggleMode() {
    setMode(!mode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{mode ? 'Dark Mode: ON' : 'Dark Mode: OFF'}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
