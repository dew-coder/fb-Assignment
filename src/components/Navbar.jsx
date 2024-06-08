import React from 'react';
import { useAuth } from '../Context/AuthContext'; // Correct import path
const profileImage = '/images/profileImage.png';

const Navbar = () => {
  const { auth, login, logout } = useAuth(); // Use useAuth instead of UserAuth

  return (
    <nav className='navbar flex-row'>
      <div className='nav-section1'>
        THE <span>PRODUCT</span> PLATFORM
      </div>
      <div className='nav-section2 flex-row'>
        <div>
          {auth ? (
            <button className='loginButton' onClick={logout}>Logout</button>
          ) : (
            <button className='loginButton' onClick={login}>Login</button>
          )}
        </div>
        <div>
          <select>
            <option value="learn">Learn</option>
          </select>
        </div>
        <div>
          <select>
            <option value="practice">Practice</option>
          </select>
        </div>
        <div className='profileImage'>
          <img src={profileImage} alt="profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
