import { FaBars } from 'react-icons/fa';

interface NavbarProps {
    onMenuClick: () => void;
}

// Barre de navigation fixe en haut — uniquement en desktop (cachée en mobile)
export default function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <header
            className="
        hidden md:flex                /* cachée par défaut, affichée à partir de md */
        fixed inset-x-0 top-0 h-14
        items-center px-4
        bg-gray-900 text-white
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
