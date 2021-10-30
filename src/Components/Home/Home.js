import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
 const {user}=useAuth();
 return (
  <div>
   <h3>This is home</h3>
   <p>{user.displayName}</p>
  </div>
 );
};

export default Home;