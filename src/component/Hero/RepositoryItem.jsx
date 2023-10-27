import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import  ChartCanvas  from "./ChartCanvas";

const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  TypeScript: "#2b7489",
  CSS: "#563D7C",
  SCSS: "#C6538C",
};

export const formatUpdateTime = (updateTime) => {
  const now = new Date();
  const updatedAt = new Date(updateTime);

  const timeDifference = now - updatedAt;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    return "Updated today";
  } else if (daysAgo === 1) {
    return "Updated yesterday";
  } else {
    return `Updated ${daysAgo} days ago`;
  }
};
const RepositoryItem = ({ repository }) => (
  <li className="link-repositories" key={`${repository.owner.login}-${repository.name}`}>
    <div className="repo-info">
      <div className="left-section">
        <p className="repo-name">{repository.name}</p>
        {repository.url && (
          <p className="repo-url">
            <a href={repository.url} target="_blank" rel="noopener noreferrer">
              {repository.url}
            </a>
          </p>
        )}
        {repository.description && (
          <p className="repo-description">{repository.description}</p>
        )}
        {repository.primaryLanguage && (
          <div className="repo-info-line">
            <div
              className="language-icon"
              style={{
                backgroundColor:
                  languageColors[repository.primaryLanguage.name] || "gray",
              }}
            />
            <p className="repo-language">{repository.primaryLanguage.name}</p>
            {repository.stargazerCount > 0 && (
              <p className="repo-stars">
                <FaRegStar className="popular-star" /> {repository.stargazerCount}
              </p>
            )}
            <p className="repo-branch">
              <GoGitBranch className="icon-branch" /> {repository.refs.totalCount}
            </p>
            <p className="repo-update">{formatUpdateTime(repository.updatedAt)}</p>
          </div>
        )}
      </div>
      <div className="right-section">
        <button className="star-button">
          <FaRegStar className="star-icon" />
          Star
        </button>
        <ChartCanvas
          data={Array.from({ length: 5 }, () =>
            Math.floor(Math.random() * 20)
          )}
        />
      </div>
    </div>
  </li>
);

export default RepositoryItem;
