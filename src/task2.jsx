import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Added the Items dependency
  // Tried running just the link in the browser but it was not opening
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, [items]);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
