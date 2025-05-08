import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(
        () =>
            // onAuthStateChanged returns the unsubscribe function directly
            onAuthStateChanged(auth, user => {
                setCurrentUser(user);
            }),
        []
    );

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): User | null {
    const user = useContext(AuthContext);
    if (user === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return user;
}