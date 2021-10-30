import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, signOut,GoogleAuthProvider,onAuthStateChanged,GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase=()=>{
  const[user,setUser]=useState({});
  const[error,setError]=useState('');
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();
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
  const logout=()=>{
     signOut(auth)
     .then(()=>{
       setUser({});
     })
  }

  const signInUsingGithub=()=>{
    signInWithPopup(auth,githubProvider)
    .then(res=>{
      setUser(res.user);

    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if (user){
        console.log('inside state',user);
        setUser(user);
      }
    })
  },[])
  return {
  user,
  logout,
  error,
  signInUsingGithub,
   signInUsingGoogle
  }
}
export default useFirebase;