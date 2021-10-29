import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
 return (
  <div>
   <h2>Please login</h2>
   <button>Google sign in</button>
   <br />
   <Link to ="/register">New user?</Link>
  </div>
 );
};

export default Login;