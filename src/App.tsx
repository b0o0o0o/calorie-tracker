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

    if (loading) return <div>Chargement…</div>;
    if (!user) return <Navigate to="/signin" replace />;
    if (!profileExists && location.pathname !== '/profile')
        return <Navigate to="/profile" replace />;
    if (profileExists && location.pathname === '/profile')
        return <Navigate to="/" replace />;
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