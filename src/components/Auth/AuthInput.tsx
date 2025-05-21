import React from 'react';

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
        <div>
            <label htmlFor={id} className="block mb-2 font-medium text-gray-200">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className="
                    w-full
                    px-4 py-3
                    bg-gray-700
                    border border-gray-600
                    rounded-lg
                    text-white
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-yellow-400
                    transition
                "
            />
        </div>
    );
};

export default AuthInput; 