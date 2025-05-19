import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaPlus, FaCog } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const navItems = [
    { to: '/', label: 'Accueil', icon: FaHome },
    { to: '/diary', label: 'Journal', icon: FaBook },
    { to: '/add-food', label: '+ Aliment', icon: FaPlus, green: true },
    { to: '/settings', label: 'Réglages', icon: FaCog },
];

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 768px)').matches);
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return isDesktop;
}

export default function Navigation() {
    const isDesktop = useIsDesktop();
    if (isDesktop) {
        return (
            <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-24 md:flex md:flex-col md:items-center md:justify-center bg-gray-800 z-50 shadow-lg rounded-r-3xl py-8">
                <nav className="flex flex-col space-y-8 items-center justify-center h-full py-4">
                    {navItems.map(({ to, icon: Icon, green }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) =>
                                `group flex flex-col mb-2 rounded-2xl items-center justify-center gap-2 transition-all duration-200 px-0 py-4
                                ${isActive ? (green ? 'bg-green-700 text-white shadow-lg scale-110' : 'bg-gray-700 text-white shadow-lg scale-110') : (green ? 'text-green-400 hover:bg-green-700 hover:text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white')}
                                `
                            }
                        >
                            <Icon size={24} className="mb-1" />
                        </NavLink>
                    ))}
                </nav>
            </aside>
        );
    }
    // Mobile
    return (
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-xl bg-gray-800/90 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl flex items-center justify-center py-3 px-3 z-50">
            <nav className="flex flex-row items-center justify-center w-full">
                {navItems.map(({ to, icon: Icon, green }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            `group flex flex-1 flex-row rounded-xl items-center justify-center gap-2 transition-all duration-200 px-3 py-2
                            ${isActive ? (green ? 'bg-green-700 text-white shadow-lg scale-110' : 'bg-gray-700 text-white shadow-lg scale-110') : (green ? 'text-green-400 hover:bg-green-700 hover:text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white')}
                            `
                        }
                    >
                        <Icon size={24} />
                    </NavLink>
                ))}
            </nav>
        </div>
    );
} 