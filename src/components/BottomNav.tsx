import { NavLink } from 'react-router-dom';

// Barre d'onglets en bas pour mobile
export default function BottomNav() {
    return (
        <footer
            className="
        fixed inset-x-0 bottom-0 h-14
        bg-gray-900
        flex justify-around items-center
        z-50 md:hidden
      "
        >
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `text-2xl ${
                        isActive ? 'text-yellow-400' : 'text-gray-500'
                    }`
                }
            >
                🏠
            </NavLink>
            <NavLink
                to="/diary"
                className={({ isActive }) =>
                    `text-2xl ${
                        isActive ? 'text-yellow-400' : 'text-gray-500'
                    }`
                }
            >
                📔
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    `text-2xl ${
                        isActive ? 'text-yellow-400' : 'text-gray-500'
                    }`
                }
            >
                ⚙️
            </NavLink>
        </footer>
    );
}
