import React from "react";
import { WriteDeleteButton } from "./Buttons";
import { useState, useContext } from "react";
import TopicsContext from "../asset/TopicsContext";

export default function Topic({ topic, keywords, activeCategory }) { 
  const {topicsData, setTopicsData} = useContext(TopicsContext);
  const [isHovered, setIsHovered] = useState(false);   // when we mouse hover on the topic the delete button will appear
  
  function getColorClass(index) {
    const colorClasses = [
      {
        text: "text-yellow-500", // we will write ${getColorClass(index).text} and we will get the value of text: "text-yellow-500"
        border: "border-yellow-500", // we will write ${getColorClass(index).border} and we will get the value of border: "border-yellow-500"
        background: "bg-yellow-50", // we will write ${getColorClass(index).background} and we will get the value of background: "bg-yellow-50"
      },
      {
        text: "text-green-500",
        border: "border-green-500",
        background: "bg-green-50",
      },
      {
        text: "text-red-500",
        border: "border-red-500",
        background: "bg-red-50",
      },
    ];
    return colorClasses[index % colorClasses.length]; // 0 % 3 = 0, 1 % 3 = 1, 2 % 3 = 2, 3 % 3 = 0, 4 % 3 = 1
  };

  const keywordElements = keywords.map((keyword, index) => (
    <div
      key={index}
      className={`inline-block whitespace-nowrap text-xs font-semibold border-2 pb-1 pt-0.5 px-2 rounded-xl  
      ${getColorClass(index).text}
      ${getColorClass(index).border} ${getColorClass(index).background}`}
    >
      {keyword}
    </div>
  ));
 
  function handleDelete() {  
    const updatedTopicsData = { ...topicsData }; // copy the topicsData object
    const categories = Object.keys(updatedTopicsData); // get all the categories
    categories.forEach(category => {
      updatedTopicsData[category] = updatedTopicsData[category].filter(data => data.topic !== topic ); // remove the topic and keywords from the topicsData object
    })
   setTopicsData(updatedTopicsData); // update the topicsData object
  }
  
  return (
    <div
      className="relative items-center p-4 border hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-3 overflow-x-auto hide-scrollbar">
        <p className="leading-3 whitespace-nowrap">{topic}</p>
        <div className="flex gap-3 ">{keywordElements}</div>
      </div>
      <WriteDeleteButton
        isHovered={isHovered}
        topic={topic}
        keywords={keywords} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}
