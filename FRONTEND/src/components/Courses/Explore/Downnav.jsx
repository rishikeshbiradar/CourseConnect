import React from 'react';
import './Downnav.css';
import searchpng from './search.png';
import homepng from './home.png';
import comparehpng from './compare.png';
import { Link } from 'react-router-dom';

export default function Downnav() {
  return (
    <div className="downNav">
      <div className="explore_down">
        <img src={homepng} alt=" " />
        <Link to="/get_started" className='explore-down-link' >Explore</Link>
      </div>

      <div className="explore_down">
        <img src={searchpng} alt=" " />
        <Link to="/get_started/search" className='explore-down-link'>Search</Link>
      </div>

      <div className="explore_down">
        <img src={comparehpng} alt=" " />
        <Link to="/get_started/compare" className='explore-down-link' >Compare</Link>
      </div>
    </div>
  );
}
