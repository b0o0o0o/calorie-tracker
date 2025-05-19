import { FaBars } from 'react-icons/fa';

interface NavBarProps {
    onMenuClick: () => void;
}

export default function NavBar({ onMenuClick }: NavBarProps) {
    return (
        <nav className="md:hidden fixed top-0 left-0 right-0 z-30 bg-gray-800/90 backdrop-blur-lg border-b border-gray-700">
            <div className="flex items-center justify-between px-6 py-4">
                <h1 className="text-lg font-semibold text-white">Calorie Tracker</h1>
                <button
                    onClick={onMenuClick}
                    className="p-2 focus:outline-none text-white hover:bg-gray-700 rounded-xl transition-all duration-200"
                    aria-label="Menu"
                >
                    <FaBars size={20} />
                </button>
            </div>
        </nav>
    );
}