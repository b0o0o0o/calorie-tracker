import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onFocus, onBlur }) => {
    console.log('SearchBar render:', { value, onFocus, onBlur });

    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => {
                    console.log('SearchBar input focused');
                    onFocus?.();
                }}
                onBlur={() => {
                    console.log('SearchBar input blurred');
                    onBlur?.();
                }}
                placeholder="Rechercher un aliment..."
                className="w-full bg-gray-50 border border-gray-400 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4D9078] focus:border-transparent"
            />
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>
    );
};

export default SearchBar; 