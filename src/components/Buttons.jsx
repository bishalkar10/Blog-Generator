import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function WriteButton({ topic, keywords }) {
  const navigate = useNavigate();
  const state = { topic, keywords };

  const handleClick = () => {
    navigate("/editor", { state });
  };
  return (
    <div>
      <button
        className="flex items-center p-2 px-3 text-white rounded bg-primary-color hover:scale-110 hover:duration-150"
        onClick={handleClick}
      >
        Write
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export function DeleteButton({handleDelete}) {
  return (
    <button onClick={handleDelete}
    className="flex items-center p-2 px-3 text-white bg-black rounded hover:scale-110 hover:duration-150">
      Delete
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
}

export function WriteDeleteButton({ isHovered, topic, keywords, handleDelete }) {
  return (
    <div className="absolute right-0 flex items-center h-full gap-2 p-2 transform -translate-y-1/2 bg-white top-1/2 ">
      {isHovered && <DeleteButton handleDelete={handleDelete}/>}
      <WriteButton topic={topic} keywords={keywords} />
    </div>
  );
}

export function AddTopicButton({ showForm, setShowForm }) {
  function handleClick() {
    setShowForm(true);
  }
  return (
    <button
      className="flex right-0 top-1/2 transform  items-center p-2 px-3 text-white rounded bg-primary-color hover:bg-[rgb(235,79,37)] whitespace-nowrap"
      onClick={handleClick}
      disabled={showForm}
    >
      Add Topic
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
}
