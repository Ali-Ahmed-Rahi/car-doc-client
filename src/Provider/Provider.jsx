import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      setUser(currentUser);
      // console.log("current user", currentUser);
      setLoading(false);
      // if user is existing then issue token
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-mocha-sigma.vercel.app/jwt",
            loggedInUser,
            {
              withCredentials: true,
            }
          ) // the withcredentials is from the backend
          .then((res) => {
            // console.log("token response", res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-mocha-sigma.vercel.app/logout",
            loggedInUser,
            { withCredentials: true }
          )
          .then((res) => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
