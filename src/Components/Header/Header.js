import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

 const{user,logout}=useAuth();

 return (
  <div>
   <Link to='/home'>Home</Link>
   <Link to='/login'>Login</Link>
   <Link to='/register'>Register</Link>
   <Link to='/shipping'>Shipping</Link>
   <span>{user.displayName} </span>
   {
     user?.email &&
     <button onClick={logout}>Log out</button>
   }
  </div>
 );
};

export default Header;