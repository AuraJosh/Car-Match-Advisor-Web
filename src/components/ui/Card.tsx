import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={twMerge(clsx(
            'bg-stone-50 border border-stone-200 rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.02] flex flex-col',
            className
        ))}>
            {children}
        </div>
    );
}
