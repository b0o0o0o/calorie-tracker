import { NavLink } from 'react-router-dom';

export default function BottomNav() {
    return (
        <footer
            className="
        fixed inset-x-0 bottom-0 h-14
        bg-white border-t border-gray-200
        flex justify-around items-center
        md:hidden
        z-50
      "
        >
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`
                }
            >
                🏠
            </NavLink>
            <NavLink
                to="/diary"
                className={({ isActive }) =>
                    `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`
                }
            >
                📔
            </NavLink>
            <NavLink
                to="/recipes"
                className={({ isActive }) =>
                    `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`
                }
            >
                🍽️
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`
                }
            >
                ⚙️
            </NavLink>
        </footer>
    );
}