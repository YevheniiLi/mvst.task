import React from 'react';
import './Sidebar.css'; // Импортируем обычный CSS-файл
import {GoPeople} from 'react-icons/go';
import {PiStarThin} from 'react-icons/pi';
import {CiMail} from 'react-icons/ci';

const Sidebar = () => {

  const user = {
    avatarUrl: '/gentleman.png',
    name: 'Yevhenii Lymarenko',
    username: 'YevheniiLi',
    bio: 'Fullstack Developer in Tesla',
    followers: 92, 
    following: 62, 
    stars: 253,

 
    email: 'jekilllimarenko@gmail.com',
    organizations: 'Организация 1, Организация 2',
  };

  return (
    <div className="sidebar">
      <img src={user.avatarUrl} alt="User Avatar" className="avatar" />
      <h2 className="name">{user.name}</h2>
      <p className="username">{user.username}</p>
      <p className="bio">{user.bio}</p>
      <div className='mb-3'>
      <button className='follow-button'>Edit profile</button>
      </div>

      <div className="stats">
        <div className="stat">
          <GoPeople className='icon-followers' />
          <p className="stat-number">{user.followers}</p>
          <p className="stat-label">followers</p>
        </div>
        <div className="stat">
          <p className="stat-number">{user.following}</p>
          <p className="stat-label">following</p>
        </div>
        <div className="stat">
          <PiStarThin className='icon-star' />
          <p className="stat-number">{user.stars}</p>
          <p className="stat-label"></p>
        </div>
      </div>

      <div className='email'>
        <CiMail className='email-icon' />
        <p className="email">{user.email}</p>
      </div>
      <div className='organizations'>
      <p className="user-organizations">Organizations: {user.organizations}</p>
      </div>
    </div>
  );
};

export default Sidebar;
