import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
 const{user}=useFirebase();
 return (
  <div>
   <Link to='/home'>Home</Link>
   <Link to='/login'>Login</Link>
   <Link to='/register'>Register</Link>
  {
   user?.email &&
   <button >Log out</button>
  }
  </div>
 );
};

export default Header;