import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder?: string;
    icon?: IconType;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder = "Rechercher...",
    icon: Icon = IoSearchOutline,
    className = ''
}) => {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                className="w-full bg-gray-50 border border-gray-400 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4D9078] focus:border-transparent"
            />
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>
    );
};

export default SearchInput; 