import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import "./Hero.css";
import {AiFillCloseCircle} from 'react-icons/ai';

const RepositoryList = ({ repositories, searchQuery, setSearchQuery }) => {
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);

  const filterRepositories = () => {
    const query = searchQuery.toLowerCase();
    const filtered = repositories.filter((repository) => {
      const repositoryName = repository.name.toLowerCase();
      return repositoryName.includes(query) || repositoryName.includes(query.split(" ")[0]);
    });

    setFilteredRepositories(filtered);
    setFilterApplied(true);
  };

  const clearFilter = () => {
    setFilteredRepositories([]);
    setFilterApplied(false);
    setSearchQuery("");
  };

  useEffect(() => {
    if (searchQuery) {
      filterRepositories();
    } else {
      setFilteredRepositories([]);
      setFilterApplied(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, repositories]);

  return (
    <div className="repositories">
      {filterApplied && (
        <div className="filter-info">
          {filteredRepositories.length === 0 ? (
      <span>
        0 results for repositories matching <span className="bold-text">{searchQuery}</span>
      </span>
    ) : (
      <span>
        <span className="bold-text">{filteredRepositories.length}</span> results for repositories matching <span className="bold-text">{searchQuery}</span>
      </span>
    )}
          <button className="clear-filter-button" onClick={clearFilter}>
            <AiFillCloseCircle style={{ marginRight: "5px" }} /> Clear filter
          </button>
        </div>
      )}

      <ul className="group-repositories">
        {filteredRepositories.length > 0
          ? filteredRepositories.map((repository) => (
              <RepositoryItem
                key={`${repository.owner.login}-${repository.name}`}
                repository={repository}
              />
            ))
          : repositories.map((repository) => (
              <RepositoryItem
                key={`${repository.owner.login}-${repository.name}`}
                repository={repository}
              />
            ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
