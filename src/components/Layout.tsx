import React from 'react';
import Navigation from './Navigation';

// Structure mobile-first : Navbar + Sidebar + contenu + BottomNav
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            {/* Navigation dock ou barre selon le mode */}
            <Navigation />
            <div className="flex-1  bg-gray-900 text-white no-scrollbar overflow-auto pb-14 md:pb-0 md:pt-14">
                {children}
            </div>
        </div>
    );
}