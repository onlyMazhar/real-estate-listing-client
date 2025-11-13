import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
const googlePfovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGooGle = () => {
        setLoading(true)

        return signInWithPopup(auth, googlePfovider)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log("User in : If", currentUser)

    //     } else {
    //         console.log("User in : else", currentUser)
    //     }
    // })

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currnet user in auth change', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubcribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        loading,
        setLoading,
        loginWithGooGle,
        logoutUser

    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;