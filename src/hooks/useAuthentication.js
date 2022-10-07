import { dbFire } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { useState, useEffect} from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //cleanup
    //deal with memory leak

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
    //Registro
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);

        try {

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user;

        } catch(error) {

            console.log(error.message);
            console.log(typeof error.message);

        }

        setLoading(false);

    };

    //Logout
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth);
    }

    //Login
    const login = async(data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false);
        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            } else if(error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } else {
                systemErrorMessage = "Erro. Tente mais tarde."
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    };

};