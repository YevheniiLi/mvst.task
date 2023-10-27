import React, { useState } from "react";
import "./Hero.css";
import { queryComponent } from "../../apollo/useQuery";
import RepositoryList from "./RepositoryList";
import SearchBar from "./SearchBar";

const Hero = () => {
  const { repositories, loading, error } = queryComponent();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="hero">
      <SearchBar searchQuery={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> {/* Используем новый компонент SearchBar */}
      <div className="filters">
        <hr className="separator" />
        <RepositoryList repositories={repositories} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default Hero;