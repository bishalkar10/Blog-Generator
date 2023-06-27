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
        className={`relative flex-shrink-0 inline-block min-w-[80px]  text-center categories ${
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
      <div className="relative flex justify-between w-full my-5 sm:pl-4 md:pl-10">
        <ul className="flex items-center w-full overflow-x-auto hide-scrollbar">{categories}</ul>
        <AddTopicButton showForm={showForm} setShowForm={setShowForm} />
      </div>
    </div>
  );
}
