import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import initAuthentication from "../Firebase/firebase.initialize";

initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => {

        })
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
              }
        })
    }, [])
    return {
        user,
        googleSignIn,
        logOut
    }
}

export default useFirebase;