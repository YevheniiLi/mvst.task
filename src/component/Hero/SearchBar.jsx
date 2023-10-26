import { MdOutlineArrowDropDown } from "react-icons/md";
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find a repository"
        className="search-input"
        value={value}
        onChange={onChange}
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
  );
};

export default SearchBar;
