import './SignUp.css';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 處理提交邏輯，例如發送到API或狀態提升
    console.log('Signup data:', { username, password });
  };

  return (
    <div className='sign-page'>
    <div className="signup-form-container">
      <h2>Create a password to start your membership</h2>
      <p>Just a few more steps and you're done! We hate paperwork, too.</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="user name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit"><Link to="/MemberShip" style={{ textDecoration: 'none', color: '#ffffff' }}>Next</Link></button>
      </form>
      
      <label>
        <input type="checkbox" /> Yes, please email me TaleHug special offers
      </label>
    </div>
    </div>
  );
}

export default SignupForm;


