import { FaBars } from 'react-icons/fa';

interface NavbarProps {
    onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <header
            className="
        hidden md:flex               /* caché par défaut, flex à partir de md */
        fixed inset-x-0 top-0 h-14
        items-center px-4
        bg-white border-b border-gray-200
        z-50
      "
        >
            <button
                onClick={onMenuClick}
                aria-label="Ouvrir le menu"
                className="p-2 focus:outline-none"
            >
                <FaBars size={20} />
            </button>
            <h1 className="ml-4 text-lg font-semibold">Calorie Tracker</h1>
        </header>
    );
}