import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`
          fixed inset-0 z-40
          bg-black bg-opacity-50
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
            />
            {/* Drawer */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50
          w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <button
                    onClick={onClose}
                    aria-label="Fermer le menu"
                    className="p-2 focus:outline-none"
                >
                    <FaTimes size={20} />
                </button>
                <nav className="mt-4 flex flex-col space-y-2 px-4">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-100' : 'hover:bg-gray-50'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/diary"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-100' : 'hover:bg-gray-50'
                            }`
                        }
                    >
                        Diary
                    </NavLink>
                    <NavLink
                        to="/recipes"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-100' : 'hover:bg-gray-50'
                            }`
                        }
                    >
                        Recettes
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-100' : 'hover:bg-gray-50'
                            }`
                        }
                    >
                        Settings
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}