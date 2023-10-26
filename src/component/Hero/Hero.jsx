import React, { useState } from "react";
import "./Hero.css";
import { queryComponent } from "../../useQuery";
import SearchBar from "./SearchBar";
import RepositoryList from "./RepositoryList";

export const languageColors = {
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

const Hero = () => {
  const { repositories, loading, error } = queryComponent();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="hero">
    <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    <RepositoryList repositories={repositories} searchQuery={searchQuery} />

  </div>
  );
};

export default Hero;
