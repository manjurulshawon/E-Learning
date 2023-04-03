
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import {initializedApp} from '../firebase/initializeApp'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigation = useNavigate()
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(initializedApp);
    const signWithGoogle =()=> signInWithPopup(auth, provider) .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUser(result.user);
        if(result.user){
            navigation("/")
        }
      }).catch((error) => {
        console.log(error.message)
      });
      return {
        signWithGoogle,user
      }
}

export default useAuth