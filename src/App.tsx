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
import { AuthProvider, useAuth } from './context/AuthContext';
import { db } from './firebase';

import Layout from './components/Layout';
import AddFoodPage from './pages/AddFood';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Settings from './pages/Settings';
import Results from './pages/Results';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const user = useAuth();  // User | null | undefined
    const location = useLocation();
    const [profileExists, setProfileExists] = useState(false);
    const [loadingProfile, setLoadingProfile] = useState(true);

    // Dès que user passe de undefined → (null | User), on démarre la subscription
    useEffect(() => {
        if (user === undefined) {
            // toujours en "loading" auth
            return;
        }
        if (user === null) {
            // pas connecté, on n'essaie pas Firestore
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

    // tant que auth ou profil n'est pas prêt → loader
    if (user === undefined || loadingProfile) {
        return <div className="flex items-center justify-center h-screen">Chargement…</div>;
    }
    if (user === null) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
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
                    {/* Publiques */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />

                    {/* Profil (sans Layout) */}
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />

                    {/* Toutes les autres pages protégées dans le Layout */}
                    <Route
                        path="/*"
                        element={
                            <Layout>
                                <Routes>
                                    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
                                    <Route path="diary" element={<PrivateRoute><Diary/></PrivateRoute>} />
                                    <Route path="add-food" element={<PrivateRoute><AddFoodPage/></PrivateRoute>} />
                                    <Route path="settings" element={<PrivateRoute><Settings/></PrivateRoute>} />
                                </Routes>
                            </Layout>
                        }
                    />

                    <Route
                        path="/results"
                        element={<Results />}
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
