import React,{useState} from 'react';
import './MarvellousMacawArticle.css';
import { Link } from 'react-router-dom';

const CourseCard = ({data}) => {

    const [desc, setDesc] = useState(data.description.slice(0, 80));
  const [readMore, setReadMore] = useState("Read More...");

  const handleReadMore = () => {
    if (desc === data.description.slice(0, 80)) {
      setDesc(data.description);
      setReadMore("Read Less...");
    } else {
      setDesc(data.description.slice(0, 80));
      setReadMore("Read More...");
    }
  };

  return (
    <div className="card-ontainer">
      <div className="square">
        <Link to={`./${data.ID}`}>
            <img
            src={data.images}
            alt="Course Cover"
            className="mask"
            />
        </Link>
        <div className="h1">
        <Link to={`./${data.ID}`} className='link-title'>
            {data.title}
        </Link>
        </div>
        <p onClick={handleReadMore} className='courseCard-desc'>
        {desc} <span onClick={handleReadMore}><b> {readMore} </b></span>
        </p>
        <div>
            <Link to={`./${data.ID}`} className='button'>
                Read More
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
