import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
 return (
  <div>
   <h2>Please registerr</h2>
   <form action="">
    <input type="email" />
    <br />
    <input type="password" />
    <br />
    <input type="submit"value="Submit" />
   </form>
   <Link to ='/login'>Already registered?</Link>
  </div>
 );
};

export default Register;