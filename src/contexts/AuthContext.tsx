// src/context/AuthContext.tsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
// Le contexte peut être undefined tant que Firebase n’a pas répondu,
// null si l’utilisateur n’est pas connecté, ou User si connecté.
const AuthContext = createContext<User | null | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    // undefined = “loading”, null = pas connecté, User = connecté
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        // onAuthStateChanged va appeler setCurrentUser(user|null) une fois
        // que Firebase a restauré la session (ou non).
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return () => unsub();
    }, []);

    // 🔑 on passe **currentUser** tel quel (pas de '?? null'), pour
    // conserver l’état undefined pendant la restauration.
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): User | null | undefined {
    // user peut être undefined (loading), null (no auth) ou User
    return useContext(AuthContext);
}