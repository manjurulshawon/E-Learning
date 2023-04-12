import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider, signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializedApp } from "../firebase/initializeApp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const gootleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(initializedApp);

  const registerWithEmailAndPassword = async ({ name, email, password }) => {
    console.log(name)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logInWithEmailAndPassword = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const googleSignIn = () => {

    signInWithPopup(auth, gootleProvider).then(() => {
      setUser(user);
      setIsLoading(false)
      toast.success("Succesfully Logedin");
      navigation("/");
    });
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    setIsLoading(true)
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false)
        // toast.success("Succesfully Logedin");
        // navigation("/");
      } else {
        setUser({});
        setIsLoading(false)
      }
    });
    return () => unsubscribed;
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      setIsLoading(true)
      toast.warning("Succesfully Logout");
      setUser({});
    });
  };
  return {
    googleSignIn,
    user,
    logout,
    githubSignIn,
    isLoading,
    registerWithEmailAndPassword
  };
};

export default useFirebase;
