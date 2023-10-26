import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import LanguageIcon from '../Hero/LanguageIcon';
import  ChartCanvas  from '../Hero/ChartCanvas';
import formatUpdateTime from './Hero';

const RepositoryItem = ({ repository }) => {
  return (
    <li className="link-repositories" key={`${repository.owner.login}-${repository.name}`}>
      <div className="repo-info">
        <div className="left-section">
          <p className="repo-name">{repository.name}</p>
          {repository.url && (
            <p className="repo-url">
              <a
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repository.url}
              </a>
            </p>
          )}
          {repository.description && (
            <p className="repo-description">
              {repository.description}
            </p>
          )}
          {repository.primaryLanguage && (
            <div className="repo-info-line">
              <LanguageIcon languageName={repository.primaryLanguage.name} />
              <p className="repo-language">
                {repository.primaryLanguage.name}
              </p>
              {repository.stargazerCount > 0 && (
                <p className="repo-stars">
                  <FaRegStar className="popular-star" />{" "}
                  {repository.stargazerCount}
                </p>
              )}
              <p className="repo-branch">
                <GoGitBranch className="icon-branch" />{" "}
                {repository.refs.totalCount}
              </p>
              <p className="repo-update">
                {formatUpdateTime(repository.updatedAt)}
              </p>
            </div>
          )}
        </div>
        <div className="right-section">
          <button className="star-button">
            <FaRegStar className="star-icon" />
            Star
          </button>
          <ChartCanvas repository={repository} />
        </div>
      </div>
    </li>
  );
};

export default RepositoryItem;
