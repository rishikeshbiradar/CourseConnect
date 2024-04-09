import React, { useState, createContext } from "react";
import "./Course_Card.css";
import { Link } from "react-router-dom";

const Course_Card = ({ element }) => {
  const [desc, setDesc] = useState(element.description.slice(0, 30));
  const [readMore, setReadMore] = useState("Read More...");

  const handleReadMore = () => {
    if (desc === element.description.slice(0, 30)) {
      setDesc(element.description);
      setReadMore("Read Less...");
    } else {
      setDesc(element.description.slice(0, 30));
      setReadMore("Read More...");
    }
  };

  return (
      <div className="card_main my-5">
        <div className="card_wrapper my-5">
          <div className="card_img">
            <img src={element.images} alt="Card Image" />
          </div>

          <div className="card_info">
            <div className="card_title">
              <Link to={`./${element.ID}`}>
                <h3>{element.title}</h3>
              </Link>
            </div>

            <div className="card_platform">
                {element.platform}
            </div>

            <div className="card_desc">
              {desc} <span onClick={handleReadMore}> {readMore} </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Course_Card;
