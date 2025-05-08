import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { db } from './firebase';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const user = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [profileExists, setProfileExists] = useState(false);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }
        const unsub = onSnapshot(
            doc(db, 'users', user.uid),
            snap => {
                setProfileExists(snap.exists());
                setLoading(false);
            },
            err => {
                console.error('[PrivateRoute] onSnapshot error', err);
                setProfileExists(false);
                setLoading(false);
            }
        );
        return () => unsub();
    }, [user]);

    if (loading) {
        return <div>Chargement…</div>;
    }
    if (!user) {
        return <Navigate to="/signin" replace />;
    }
    if (!profileExists && location.pathname !== '/profile') {
        return <Navigate to="/profile" replace />;
    }
    if (profileExists && location.pathname === '/profile') {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
}

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />

                    {/* Page de complétion du profil */}
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />

                    {/* Home protégée */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}