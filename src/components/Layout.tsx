import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Navbar uniquement desktop */}
            <Navbar onMenuClick={() => setSidebarOpen(true)} />

            {/* Sidebar + overlay uniquement desktop */}
            <div className="hidden md:block">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
            </div>

            {/* Contenu principal */}
            <main className="pt-14 pb-14">
                {children}
            </main>

            {/* BottomNav uniquement mobile */}
            <BottomNav />
        </>
    );
}