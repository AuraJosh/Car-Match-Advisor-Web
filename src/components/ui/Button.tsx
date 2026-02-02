import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: ReactNode;
    className?: string;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2';

    const variants = {
        primary: 'bg-white text-slate-900 border-2 border-brand rounded-full hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-[#003579] hover:text-white',
        secondary: 'bg-white border border-slate-200 text-slate-900 rounded-full hover:bg-slate-100',
        ghost: 'text-slate-600 hover:text-brand',
    };

    const sizes = 'px-8 py-4 text-lg'; // Default large size as per design

    return (
        <button
            className={twMerge(clsx(baseStyles, variants[variant], sizes, className))}
            {...props}
        >
            {children}
        </button>
    );
}
