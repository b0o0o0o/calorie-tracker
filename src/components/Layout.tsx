import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

// Structure mobile-first : Navbar + Sidebar + contenu + BottomNav
export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Navbar onMenuClick={() => setSidebarOpen(true)} />

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Contenu principal avec padding-bottom pour BottomNav */}
            <main>
                {children}
            </main>

            <BottomNav />
        </>
    );
}
