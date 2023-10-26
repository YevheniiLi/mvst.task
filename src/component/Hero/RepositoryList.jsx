import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories, searchQuery }) => {
  const filteredRepositories = repositories.filter((repository) => {
    const repositoryName = repository.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      repositoryName.includes(query) || repositoryName.includes(query.split(" ")[0])
    );
  });

  return (
    <div className="filters">
      <hr className="separator" />
      <div className="repositories">
        <ul className="group-repositories">
          {filteredRepositories.map((repository) => (
            <RepositoryItem key={`${repository.owner.login}-${repository.name}`} repository={repository} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoryList;