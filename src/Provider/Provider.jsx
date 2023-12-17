import React, { createContext, useEffect, useState } from "react";
export const MyContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebaseConfig";
export default function Provider({ children }) {
  // get auth from firebase config
  const auth = getAuth(app);
  // declare use state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user,setUser] = useState(null)

  // register new account
  const register = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "",
          })
            .then(() => {
              setSuccess("Account Created Successfully!");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        if ((err.code = "auth/weak-password")) {
          setError("Password Must Be Grather Than or Equal 6 Characters");
        }
        if (err.code == "auth/email-already-in-use") {
          setError("This Email Already In Use");
        }
      });
  };
  // login exiting account
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };
 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => {
    unsubscribe()
  }
 },[])
  const Info = {
    error,
    success,
    register,
    login,
    user
  };
  return <MyContext.Provider value={Info}>{children}</MyContext.Provider>;
}
