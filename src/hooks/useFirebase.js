import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import { initializedApp } from "../firebase/initializeApp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useFirebase = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const gootleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(initializedApp);

  const googleSignIn = () => {
    signInWithPopup(auth, gootleProvider).then(() => {
      setUser(user);
      toast.success("Succesfully Logedin");
      navigation("/");
    });
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // toast.success("Succesfully Logedin");
        // navigation("/");
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      toast.warning("Succesfully Logout");
      setUser({});
    });
  };
  return {
    googleSignIn,
    user,
    logout,
    githubSignIn,
  };
};

export default useFirebase;
