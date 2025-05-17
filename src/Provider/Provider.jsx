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

  //  Create User (Signup)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Signup Error:", error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  // Login User
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  //  Logout User
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  //  Handle User State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          const token = await currentUser.getIdToken(); // Get Firebase ID token
          const loggedInUser = { email: currentUser.email, token }; // Send token
          await axios.post(
            "https://car-doctor-server-omega-six-54.vercel.app/jwt",
            loggedInUser,
            {
              withCredentials: true,
            }
          );
        } catch (err) {
          console.error("JWT Error:", err.response);
        }
      } else {
        try {
          await axios.post(
            "https://car-doctor-server-omega-six-54.vercel.app/logout",
            {},
            { withCredentials: true }
          );
        } catch (err) {
          console.error("Logout Error:", err.response);
        }
      }
    });

    return () => unsubscribe();
  }, []); // Removed `user` from dependencies

  //  Auth Context Data
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
