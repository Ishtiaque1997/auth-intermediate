import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

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
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if (user){
        console.log('inside ctate',user);
        setUser(user);
      }
    })
  },[])
  return {
  user,
  error,
   signInUsingGoogle
  }
}
export default useFirebase;