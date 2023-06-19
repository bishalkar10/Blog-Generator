import { useContext, useState } from "react";
import TopicCategories from "../components/TopicCategories";
import TopicList from "../components/TopicList";
import TopicsContext from "../asset/TopicsContext";

export default function Homepage() {
  const [activeCategory, setActiveCategory] = useState("All"); // State to track the active category
  const [showForm, setShowForm] = useState(false); // State to track the form visibility
  const [formData, setFormData] = useState({ topic: "", keywords: "" });
  const { setTopicsData } = useContext(TopicsContext); // State for TopicsData

  function handleChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value, // we wiil trim the trailing whitespaces...
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFormData((prevFormData) => ({
      ...prevFormData,
      topic: formData.topic.trim(),
      keywords: formData.keywords.trim(),
    }));

    setTopicsData((prevTopicsData) => {
      const filteredkeywords = formData.keywords
        .split(",") // this will make an array of that string.
        .filter((keyword) => keyword.trim() !== ""); // filter those keywords which are not empty ""

      // update the custom the array. first put the new object in the array and then spread the rest of the objects.
      const updatedCustom = [
        {
          topic: formData.topic,
          keywords: filteredkeywords,
        },
        ...prevTopicsData.Custom,
      ];
      // TopicData is initially an object and then return as an object -> spread the previous data and then update the custom array
      return {
        ...prevTopicsData,
        Custom: updatedCustom,
      };
    });
    setFormData({ topic: "", keywords: "" });
    setShowForm(false);
  }
  return (
    <div className="relative min-h-screen p-5 border-2">
      {/* Upper section of the HOmepagae ---- Topic catergories */}
      <TopicCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        showForm={showForm}
        setShowForm={setShowForm}
      />

      {/* topic lists take an prop activeCategory to show which category is active now and the render topics of the category */}
      <TopicList activeCategory={activeCategory} />
      {/* clicking on the add topic button sets showform true, if showForm is true then diaplay the form */}
      {showForm && (
        <form
          className="absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 border-2 rounded min-w-[350px] w-3/4 max-w-xl top-1/2 left-1/2 bg-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <textarea
              name="topic"
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Write your topic here... eg. The Importance of Establishing a Strong Online Presence for Small Businesses and what to do "
              className="w-full p-4 overflow-hidden break-words border-2 rounded-t h-28"
            ></textarea>
            <textarea
              name="keywords"
              id="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Write your comma separated keywords here... eg. online presence, small business,..."
              className="w-full p-4 overflow-hidden break-words border-2 rounded-b h-28"
            ></textarea>
          </div>
          <div className="m-auto">
            <button
              onClick={() => {
                // set the formdata key values to empty strings and setShowForm to false so we can hide it.
                setFormData({ topic: "", keywords: "" });
                setShowForm(false);
              }}
              className="w-32 rounded-l h-10 text-white bg-black "
            >
              Delete
            </button>
            <button
              type="submit"
              className="w-32 rounded-r h-10 text-white bg-primary-color"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
