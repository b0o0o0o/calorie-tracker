import React from 'react';
import Input from '../common/Input';

interface AuthInputProps {
    id: string;
    type: 'email' | 'password';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
    id,
    type,
    value,
    onChange,
    placeholder,
    label
}) => {
    return (
        <Input
            id={id}
            type={type}
            value={value}
            onChange={(value) => onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)}
            placeholder={placeholder}
            label={label}
            required={true}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400"
        />
    );
};

export default AuthInput; 