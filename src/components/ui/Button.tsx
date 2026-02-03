import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-medium transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
                    'disabled:opacity-50 disabled:pointer-events-none',
                    // Variants
                    variant === 'primary' &&
                    'bg-white text-black hover:bg-zinc-200 focus:ring-white',
                    variant === 'secondary' &&
                    'bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800 focus:ring-zinc-500',
                    variant === 'ghost' &&
                    'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5',
                    variant === 'outline' &&
                    'bg-transparent text-white border border-zinc-600 hover:border-zinc-400 focus:ring-zinc-400',
                    // Sizes
                    size === 'sm' && 'px-3 py-1.5 text-sm rounded-lg',
                    size === 'md' && 'px-5 py-2.5 text-sm rounded-xl',
                    size === 'lg' && 'px-8 py-3 text-base rounded-2xl',
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
