import React from 'react'
import './searchcard.css'
import { Link } from 'react-router-dom'


const SearchCard = ({data}) => {
  return (
    <li className="cards__item">
      <div className="card">
        <div className='card__image'>
          <img src={data.images} alt="" />
        </div>
        <div className="card__content">
          <Link to={`./${data.ID}`}>
            <div className="card__title">{data.title}</div>
          </Link>
          <p className="card__text">{data.platform}</p>
          <Link to={`./${data.ID}`}>
            <button className="searchcard-btn btn--block card__btn">Know More</button>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default SearchCard