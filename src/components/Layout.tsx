import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

// Structure mobile-first : Navbar + Sidebar + contenu + BottomNav
export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(open => !open);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex flex-col h-screen">
            <Navbar
                isSidebarOpen={isSidebarOpen}
                onMenuClick={toggleSidebar}
            />

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />

            {/* Contenu principal prend tout l’espace restant */}
            <main className="flex-1 bg-black text-white no-scrollbar overflow-auto pb-14 md:pb-0 md:pt-14">
                {children}
            </main>

            <BottomNav />
        </div>
    );
}