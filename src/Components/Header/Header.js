import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
 const{user,logout}=useFirebase();
 return (
  <div>
   <Link to='/home'>Home</Link>
   <Link to='/login'>Login</Link>
   <Link to='/register'>Register</Link>
   <span>{user.displayName} </span>
  {
   user?.email &&
   <button onClick={logout}>Log out</button>
  }
  </div>
 );
};

export default Header;