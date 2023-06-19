import TopicsContext from "../asset/TopicsContext";
import { useContext } from "react";
import Topic from "./Topic";

export default function TopicList({ activeCategory }) {
  const { topicsData } = useContext(TopicsContext);

  // * if activeCategory is "All" then we will show all the topics from all the categories
  let topicsList = [];
  if (activeCategory.toLowerCase() === "All".toLowerCase()) {
    topicsList = Object.keys(topicsData).map((category) => {
      return topicsData[category].map((data, index) => (
        <Topic key={index} topic={data.topic} keywords={data.keywords} />
      ));
    });
  } else {
    // * if activeCategory is not "All" then we will show the topics of the active category

    topicsList = topicsData[activeCategory].map((data, index) => (
      <Topic key={index} topic={data.topic} keywords={data.keywords} activeCategory={activeCategory} />
    ));
  }

  return ( 
    // 
    <div> 
    
      {activeCategory !== "All" && activeCategory !== "Custom" && (
  <div className="px-4 py-1 border rounded">Recommended Topics</div>
)}

      <div>
        {topicsList.length ? (
          topicsList
        ) : (
          <div className="absolute text-4xl transform -translate-x-1/2 -translate-y-1/2 text-slate-400 top-1/2 left-1/2 ">
            No Topics
          </div>
        )}
      </div>
    </div>
  );
}
