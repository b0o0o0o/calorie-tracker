// src/App.tsx
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

import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const user = useAuth();  // User | null | undefined
    const location = useLocation();
    const [profileExists, setProfileExists] = useState(false);
    const [loadingProfile, setLoadingProfile] = useState(true);

    // On écoute l’existence du profil dès que user est connu (ou non).
    useEffect(() => {
        if (user === undefined) {
            // on attend la restauration de la session
            return;
        }
        if (user === null) {
            // pas d’utilisateur, pas de profil à charger
            setLoadingProfile(false);
            return;
        }
        setLoadingProfile(true);
        const unsub = onSnapshot(
            doc(db, 'users', user.uid),
            snap => {
                setProfileExists(snap.exists());
                setLoadingProfile(false);
            },
            err => {
                console.error('[PrivateRoute] onSnapshot error', err);
                setProfileExists(false);
                setLoadingProfile(false);
            }
        );
        return () => unsub();
    }, [user]);

    // Si auth ou profil en cours de chargement, on affiche un loader
    if (user === undefined || loadingProfile) {
        return <div className="flex items-center justify-center h-screen">Chargement…</div>;
    }
    // Si pas connecté, on redirige vers signin
    if (user === null) {
        return <Navigate to="/signin" replace />;
    }
    // Si profil absent et pas sur /profile, on redirige vers /profile
    if (!profileExists && location.pathname !== '/profile') {
        return <Navigate to="/profile" replace />;
    }
    // Si profil présent et sur /profile, on redirige vers /
    if (profileExists && location.pathname === '/profile') {
        return <Navigate to="/" replace />;
    }
    // Tout est prêt, on rend l’enfant
    return <>{children}</>;
}

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Publiques, sans Layout */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />

                    {/* Profil (une fois connecté), sans Layout */}
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />

                    {/* Protected routes avec Layout */}
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            </Layout>
                        }
                    />
                    <Route
                        path="/diary"
                        element={
                            <Layout>
                                <PrivateRoute>
                                    <Diary />
                                </PrivateRoute>
                            </Layout>
                        }
                    />
                    <Route
                        path="/recipes"
                        element={
                            <Layout>
                                <PrivateRoute>
                                    <Recipes />
                                </PrivateRoute>
                            </Layout>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <Layout>
                                <PrivateRoute>
                                    <Settings />
                                </PrivateRoute>
                            </Layout>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
