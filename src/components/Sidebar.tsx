import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

// Drawer latéral déclenché par le hamburger
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
            {/* Contenu du drawer */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50
          w-64 bg-gray-800
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <button
                    onClick={onClose}
                    aria-label="Fermer le menu"
                    className="p-2 focus:outline-none text-white"
                >
                    <FaTimes size={20} />
                </button>
                <nav className="mt-4 flex flex-col space-y-4 px-4">
                    {/* Liens de navigation */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/diary"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`
                        }
                    >
                        Diary
                    </NavLink>
                    <NavLink
                        to="/recipes"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`
                        }
                    >
                        Recettes
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `block py-2 px-2 rounded ${
                                isActive ? 'font-bold bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
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
