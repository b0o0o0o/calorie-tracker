import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaPlus, FaCog } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { PALETTE } from '../config/theme';
import AddFoodMenu from './AddFood/AddFoodMenu';

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
    const [showAddFoodMenu, setShowAddFoodMenu] = useState(false);

    const handleAddFoodClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowAddFoodMenu(true);
    };

    const handleMealSelect = () => {
        setShowAddFoodMenu(false);
    };

    const handleManualAdd = () => {
        setShowAddFoodMenu(false);
    };

    if (isDesktop) {
        return (
            <>
                <aside className="hidden md:fixed md:top-1/2 md:left-0 md:-translate-y-1/2 md:w-16 md:flex md:flex-col md:items-center md:justify-center bg-[#CFE6CC]/50 border border-gray-100 z-50 shadow-xl rounded-r-3xl py-8">
                    <nav className="flex flex-col space-y-8 items-center justify-center h-full py-2">
                        {navItems.map(({ to, icon: Icon, green }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                onClick={to === '/add-food' ? handleAddFoodClick : undefined}
                                className={({ isActive }) =>
                                    `group flex flex-col mb-2 rounded-full items-center justify-center gap-2 transition-all duration-200 px-3 py-3 mb-5 shadow-sm
                                    ${isActive ? 'bg-[#e7f2e5] text-white scale-110' : 'bg-white text-[#4D9078] hover:bg-[#e7f2e5]/30 hover:text-[#4D9078]'}
                                    border border-gray-200`
                                }
                            >
                                <Icon size={22} color={green ? PALETTE.green : PALETTE.teal} />
                            </NavLink>
                        ))}
                    </nav>
                </aside>
                {showAddFoodMenu && (
                    <AddFoodMenu
                        onMealSelect={handleMealSelect}
                        onManualAdd={handleManualAdd}
                        onClose={() => setShowAddFoodMenu(false)}
                    />
                )}
            </>
        );
    }

    // Mobile
    return (
        <>
            <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-xl bg-[#CFE6CC]/50 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl flex items-center justify-center py-3 px-3 z-50">
                <nav className="flex flex-row items-center justify-center w-full">
                    {navItems.map(({ to, icon: Icon, green }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            onClick={to === '/add-food' ? handleAddFoodClick : undefined}
                            className={({ isActive }) =>
                                `group flex flex-1 flex-row rounded-full items-center justify-center gap-2 transition-all duration-200 px-3 py-2 mx-1
                                ${isActive ? 'bg-[#e7f2e5] text-white scale-105' : 'bg-white text-[#4D9078] hover:bg-[#e7f2e5]/30 hover:text-[#4D9078]'}
                                border border-gray-200 shadow-sm`
                            }
                        >
                            <Icon size={26} color={green ? PALETTE.green : PALETTE.teal} />
                        </NavLink>
                    ))}
                </nav>
            </div>
            {showAddFoodMenu && (
                <AddFoodMenu
                    onMealSelect={handleMealSelect}
                    onManualAdd={handleManualAdd}
                    onClose={() => setShowAddFoodMenu(false)}
                />
            )}
        </>
    );
} 