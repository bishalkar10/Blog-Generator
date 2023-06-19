import React, { useState } from "react";
import { AddTopicButton } from "./Buttons";

export default function TopicCategories({
  activeCategory,
  setActiveCategory, 
  showForm,
  setShowForm,
}) {
  const categories = ["All", "Custom", "ICP", "Mission", "Product"].map(
    (category, index) => (
      <li
        className={`relative inline-block w-24 text-center categories ${
          category === activeCategory ? "active" : "" // Apply "active" class to the active category
        }`}
        key={index}
        onClick={() => setActiveCategory(category)} // Update the active category on click
      >
        {category}
      </li>
    )
  );

  return (
    <div>
      <h2 >Categories</h2>
      <div className="flex justify-between pl-10 my-5">
        <ul className="flex items-center">{categories}</ul>
        <AddTopicButton showForm={showForm} setShowForm={setShowForm} />
      </div>
    </div>
  );
}
