import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import axios from 'axios';
const googlePfovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

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

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // getting user role from DB
    const getUserRole = async (email) => {
        try {
            const res = await axios(`${import.meta.env.VITE_API_LINK}/user-role?email=${email}`);
            setRole(res.data.role)
        } catch {
            setRole("user")
        }
    }


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
            // console.log('currnet user in auth change', currentUser)
            setUser(currentUser)

            if (currentUser?.email) {
                await getUserRole(currentUser.email);
            } else {
                setRole(null)
            }
            setLoading(false)

        })
        return () => {
            unsubcribe()
        }
    }, [])

    const authInfo = {
        user,
        role,
        setUser,
        createUser,
        loginUser,
        updateUser,
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