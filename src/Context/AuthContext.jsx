import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
export const AuthProvider = createContext();


function AuthContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    function GoogleSignIn() {
        return signInWithPopup(auth, googleProvider)

    }

    function CreateUserWithEmailPass(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUserEmailPass(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    function updateUserName(name) {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return () => unsubcribe();
        })
    }, []);


    const authInfo = {
        user,
        GoogleSignIn,
        CreateUserWithEmailPass,
        updateUserName,
        signInUserEmailPass,
        loading
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    )
}

export default AuthContext;