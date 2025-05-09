// src/context/AuthContext.tsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext<User | null | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

    useEffect(
        () =>
            // onAuthStateChanged returns the unsubscribe function directly
            onAuthStateChanged(auth, user => {
                setCurrentUser(user);
            }),
        []
    );

    return (
        <AuthContext.Provider value={currentUser ?? null}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): User | null | undefined {
    const user = useContext(AuthContext);
    if (user === undefined) {
        // tant que Firebase ne nous a pas encore fourni l'utilisateur,
        // on reste en état "loading" (user === undefined)
        return undefined;
    }
    return user;
}
