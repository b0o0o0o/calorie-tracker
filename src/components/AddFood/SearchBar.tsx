import React from 'react';
import SearchInput from '../common/SearchInput';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onFocus, onBlur }) => {
    return (
        <SearchInput
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="Rechercher un aliment..."
        />
    );
};

export default SearchBar; 