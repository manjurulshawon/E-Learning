import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializedApp } from "../firebase/initializeApp";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const history = useLocation();

  const gootleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(initializedApp);

  const registerWithEmailAndPassword = async ({ name, email, password }) => {
    console.log(name);
    try {
      const newUser = { email, displayName: name };
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      saveUser(email, name, "post");
      // send name to firebase after creation
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {});

      console.log(user);
      navigation("/login");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res) => {
        setUser(res.user);
        console.log("userlog", res.user, history);
        setIsLoading(false);
        toast.success("Succesfully Logedin");
        navigation(history.state ? history.state.from : "/");
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const googleSignIn = () => {
    signInWithPopup(auth, gootleProvider).then((res) => {
      const user = res.user;
      setUser(user);
      console.log("g", user);
      saveUser(user.email, user.displayName, "put");
      setIsLoading(false);
      toast.success("Succesfully Logedin");
      navigation(history.state ? history.state.from : "/");
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
        console.log("cur", user);
        // toast.success("Succesfully Logedin");
        // navigation("/");
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unsubscribed;
  }, []);

  // SAVE USER DB
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName, userType: "user" };
    console.log("userdb", user);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // check admin
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  const logout = () => {
    signOut(auth).then(() => {
      setIsLoading(true);
      toast.warning("Succesfully Logout");
      setUser({});
      // navigation(null, { state: null });
      searchParams.delete("state");

      // Update the URL with modified query parameters
      setSearchParams(searchParams);
    });
  };
  return {
    googleSignIn,
    admin,
    user,
    logout,
    isLoading,
    setIsLoading,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
  };
};

export default useFirebase;
