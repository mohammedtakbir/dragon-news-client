import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* sign in with google
    const googleSignIn = () => { 
        return signInWithPopup(auth, googleProvider)
    };

    //* create an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //* logIn an user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* get currently sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    //* Sign out
    const userSignOut = () => {
        return signOut(auth)
    };

    //* update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };
    //* send a verification email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = { user, googleSignIn, userSignOut, createUser, userLogIn, loading, updateUserProfile, verifyEmail, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;