import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const SearchBar = ({ searchQuery, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find a repository"
        className="search-input"
        value={searchQuery}
        onChange={onChange}
      />
      <button className="filter-button">
        Type: <span className="black-text">All</span> <MdOutlineArrowDropDown />
      </button>
      <button className="filter-button">
        Language: <span className="black-text">All</span> <MdOutlineArrowDropDown />
      </button>
    </div>
  );
};

export default SearchBar;
