// UserSwitch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserSwith.css';

function UserSwitch() {
  const [users, setUsers] = useState(['']);

  const addUser = () => {
    setUsers([...users, 'new user']);
    // 实现导航逻辑（如果需要）
  };

  return (
    <div className="user-switch-container">
      <h2>WHO'S READING?</h2>
      <div className="users-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src="https://www.grimmpress.com.tw/image/cache/catalog/product/9789861898957_bc-600x695.jpg" alt="User" />
            <span>{user}</span>
          </div>
        ))}
        <Link to="/Login" className="add-user-button">+</Link>
      </div>
    </div>
  );
}

export default UserSwitch;
