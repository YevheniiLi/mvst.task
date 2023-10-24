import React from 'react'
import { PiBookOpenThin } from 'react-icons/pi';
import { PiNotebook } from 'react-icons/pi';
import { GoProject } from 'react-icons/go';
import './Header.css';

const Header = () => {
    return (
      <header>
        <div className="header-container">
          <ul>
            <li>
              <PiBookOpenThin className="icon" />
              <a href="#" id="overview">Overview</a>
            </li>
            <li>
              <PiNotebook className="icon" />
              <a href="#" id="repositories">Repositories</a>
            </li>
            <li>
              <GoProject className="icon" />
              <a href="#" id="projects">Projects</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }

export default Header