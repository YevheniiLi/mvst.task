import React from "react";
import "./Sidebar.css";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

interface User {
  avatarUrl: string;
  name: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
  stars: number;
  email: string;
  organizations: string;
}

const Sidebar: React.FC = () => {
  const user: User = {
    avatarUrl: "logo/tesla.png",
    name: "Nicola Tesla",
    username: "Nico",
    bio: "Software Engineer Engineer in Tesla inc.",
    followers: 9921,
    following: 23,
    stars: 2453,
    email: "electronico@gmail.com",
    organizations: "Организация 1, Организация 2",
  };

  return (
    <div className="sidebar">
      <img src={user.avatarUrl} alt="User Avatar" className="avatar" />
      <h2 className="name">{user.name}</h2>
      <p className="username">{user.username}</p>
      <p className="bio">{user.bio}</p>
      <div className="follow-section">
        <button className="follow-button">Follow</button>
        <span className="dots">...</span>
      </div>

      <div className="stats">
        <div className="stat">
          <GoPeople className="icon-followers" />
          <p className="stat-number">{user.followers}</p>
          <p className="stat-label">followers</p>
        </div>
        <div className="stat">
          <p className="stat-number">{user.following}</p>
          <p className="stat-label">following</p>
        </div>
        <div className="stat">
          <FaRegStar className="icon-star" style={{ color: "#6a737d" }} />
          <p className="stat-number">{user.stars}</p>
          <p className="stat-label"></p>
        </div>
      </div>

      <div className="email">
        <CiMail className="email-icon" />
        <p className="email">{user.email}</p>
      </div>
      <hr className="separator" />
      <div className="organizations">
        <p className="title-organizations">Organizations</p>
        <div className="icon-organizations-container">
          <img src="icons/react.gif" alt="" className="icon-org" />
          <img src="icons/apple.gif" alt="" className="icon-org" />
          <img src="icons/javascript.gif" alt="" className="icon-org" />
          <img src="icons/vscode.gif" alt="" className="icon-org" />
          <img src="icons/github.gif" alt="" className="icon-org" />
          <img src="icons/node.gif" alt="" className="icon-org" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
