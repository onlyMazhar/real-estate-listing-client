import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (password, email) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser =( )=>{
        return signOut(auth)
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log("User in : If", currentUser)

    //     } else {
    //         console.log("User in : else", currentUser)
    //     }
    // })

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('currnet user in auth change', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
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