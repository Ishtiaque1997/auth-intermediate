import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <div>
   <Link to='/home'>Home</Link>
   <Link to='/login'>Login</Link>
   <Link to='/register'>Register</Link>
  </div>
 );
};

export default Header;