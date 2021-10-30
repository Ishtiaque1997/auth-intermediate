import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, signOut,GoogleAuthProvider,onAuthStateChanged,GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase=()=>{

  //declare the necessary states
  const[user,setUser]=useState({});
  const[error,setError]=useState('');

  //declare the necessary firebase providers
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();

  //handling the google sign in method
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

  //handling the log out process
  const logout=()=>{
     signOut(auth)
     .then(()=>{
       setUser({});
     })
  }
  
  //handling the github sign in process
  const signInUsingGithub=()=>{
    signInWithPopup(auth,githubProvider)
    .then(res=>{
      setUser(res.user);
    })
  }
  
  //ui display
  useEffect(()=>{
  onAuthStateChanged(auth,user=>{
      if (user){
        console.log('inside state',user);
        setUser(user);
       }
     })
  },[])
  
  //return the necessary things
  return {
  user,
  logout,
  error,
  signInUsingGithub,
   signInUsingGoogle
  }
}
export default useFirebase;