import React from 'react';
import Navigation from './Navigation';

// Structure mobile-first : Navbar + Sidebar + contenu + BottomNav
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            {/* Navigation dock ou barre selon le mode */}
            <Navigation />
            <div className="flex-1 bg-[#F9FAFB] text-gray-800 no-scrollbar overflow-auto pb-25 md:pb-10 md:pt-14 px-4">
                {children}
            </div>
        </div>
    );
}