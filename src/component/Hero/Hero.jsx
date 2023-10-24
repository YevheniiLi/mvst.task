import React from 'react';
import './Hero.css'; // Импортируем обычный CSS-файл
import {PiStarThin} from 'react-icons/pi';

const Hero = () => {
  return (
    <div className="hero">
    <div className="search">
      <input type="text" placeholder="Find a repository" className="search-input" />
      <button className="filter-button">Type: All</button>
      <button className="filter-button">Language: All</button>
    </div>
    <div className="filters"></div>
    <div className="repositories">
      <ul className='group-repositories'>
        <li className='link-repositories'>
          <div className="repo-info">
            <p>Repository 1</p>
            <p>Language: JavaScript</p>
            <p>Branches: 10</p>
            <p>Last Updated: 2023-10-24</p>
          </div>
          <button className="star-button">
            <PiStarThin className='star-icon' />
            Star</button>        </li>
        <hr className="separator" />
        <li className='link-repositories'>
          <div className="repo-info">
            <p>Repository 2</p>
            <p>Language: Python</p>
            <p>Branches: 5</p>
            <p>Last Updated: 2023-10-22</p>
          </div>
          <button className="star-button">
            <PiStarThin className='star-icon' />
            Star</button>
        </li>
        <hr className="separator" />
        <li className='link-repositories'>
          <div className="repo-info">
            <p>Repository 3</p>
            <p>Language: Java</p>
            <p>Branches: 8</p>
            <p>Last Updated: 2023-10-23</p>
          </div>
          <button className="star-button">
            <PiStarThin className='star-icon' />
            Star</button>        </li>
        <hr className="separator" />
      </ul>
    </div>
  </div>
);
};

export default Hero;
