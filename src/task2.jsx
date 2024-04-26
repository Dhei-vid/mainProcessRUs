import React, { useState, useEffect } from "react";
import "./tasks-styles.css";

const ItemList = () => {
  const [countries, setCountries] = useState([]);

  // Added the Items dependency
  // Tried running just the link in the browser but it was not opening
  // I tried a different API - a countries API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, [countries]);

  return (
    <div>
      <h2>Country List</h2>
      <div>
        {countries.map((item) => (
          <div className="task2Items" s>
            {item.name.common}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
