import React from 'react';
import languageColors from './Hero';

const LanguageIcon = ({ languageName }) => {
  return (
    <div
      className="language-icon"
      style={{
        backgroundColor: languageColors[languageName] || "gray",
      }}
    />
  );
};

export default LanguageIcon;