import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl focus:ring-emerald-500 border border-transparent',
        secondary: 'bg-white hover:bg-gray-50 text-gray-800 shadow-md hover:shadow-lg focus:ring-gray-200 border border-gray-100',
        outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 focus:ring-emerald-500',
        danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg focus:ring-red-500 border border-transparent',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {!isLoading && icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
