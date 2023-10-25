import React, { useState } from 'react';
import { PiBookOpenThin } from 'react-icons/pi';
import { PiNotebook } from 'react-icons/pi';
import { GoProject } from 'react-icons/go';
import './Header.css';

const Header = () => {
  const sections = [
    { id: 'overview', label: 'Overview', Icon: PiBookOpenThin },
    { id: 'repositories', label: 'Repositories', Icon: PiNotebook },
    { id: 'projects', label: 'Projects', Icon: GoProject },
  ];

  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <header>
    <div className="header-container">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`${
              selectedSection === section.id ? 'selected' : ''
            }`}
            onClick={() => handleSectionClick(section.id)}
          >
            <section.Icon className={`icon ${selectedSection === section.id ? 'selected' : ''}`} />
            <button onClick={() => handleSectionClick(section.id)}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </header>
  );
}

export default Header;
