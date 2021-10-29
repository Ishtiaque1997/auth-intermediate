import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './../firebase/firebase.init';

initializeAuthentication();
const useFirebase=()=>{
  const[user,setUser]=useState({});
  const[error,setError]=useState('');
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();
  const signInUsingGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(res=>{
     console.log(res.user);
     setUser(res.user);

    })
    .catch(error=>{
     setError(error.message);
    })
  }
  return {
  user,
  error,
   signInUsingGoogle
  }
}
export default useFirebase;