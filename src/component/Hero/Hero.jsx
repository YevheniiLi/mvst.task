import React from "react";
import "./Hero.css";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero">
      <div className="search">
        <input
          type="text"
          placeholder="Find a repository"
          className="search-input"
        />
        <button className="filter-button">
          Type: <span className="black-text">All</span>{" "}
          <MdOutlineArrowDropDown />
        </button>
        <button className="filter-button">
          Language: <span className="black-text">All</span>{" "}
          <MdOutlineArrowDropDown />
        </button>
      </div>
      <div className="filters">

      <hr className="separator" />

      <div className="repositories">
        <ul className="group-repositories">
          <li className="link-repositories">
            <div className="repo-info">
              <p className="repo-name">Repository 1</p>
              <p className="repo-language">Language: JavaScript</p>
              <p className="repo-branche">Branches: 10</p>
              <p className="repo-update">Last Updated: 2023-10-24</p>
            </div>
            <button className="star-button">
              <FaRegStar className="star-icon" />
              Star
            </button>{" "}
          </li>
          <hr className="separator" />
          <li className="link-repositories">
            <div className="repo-info">
              <p className="repo-name">Repository 2</p>
              <p className="repo-language">Language: Python</p>
              <p className="repo-branche">Branches: 5</p>
              <p className="repo-update">Last Updated: 2023-10-22</p>
            </div>
            <button className="star-button">
              <FaRegStar className="star-icon" />
              Star
            </button>
          </li>
          <hr className="separator" />
          <li className="link-repositories">
            <div className="repo-info">
              <p className="repo-name">Repository 3</p>
              <p className="repo-language">Language: Java</p>
              <p className="repo-branche">Branches: 8</p>
              <p className="repo-update">Last Updated: 2023-10-23</p>
            </div>
            <button className="star-button">
              <FaRegStar className="star-icon" />
              Star
            </button>{" "}
          </li>
          <hr className="separator" />
          <li className="link-repositories">
            <div className="repo-info">
              <p className="repo-name">Repository 4</p>
              <p className="repo-language">Language: Java</p>
              <p className="repo-branche">Branches: 8</p>
              <p className="repo-update">Last Updated: 2023-10-23</p>
            </div>
            <button className="star-button">
              <FaRegStar className="star-icon" />
              Star
            </button>{" "}
          </li>
          <hr className="separator" />
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Hero;
