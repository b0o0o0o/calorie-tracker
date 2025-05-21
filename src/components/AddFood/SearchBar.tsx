import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative mb-4">
            <input
                type="text"
                placeholder="Rechercher un aliment..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 px-10"
            />
            <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
    );
};

export default SearchBar; 