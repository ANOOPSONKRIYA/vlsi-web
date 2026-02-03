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
                    'inline-flex items-center justify-center font-semibold transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
                    'disabled:opacity-50 disabled:pointer-events-none',
                    'shadow-lg hover:shadow-xl',
                    // Variants
                    variant === 'primary' &&
                    'bg-white text-black hover:bg-zinc-100 focus:ring-white hover:scale-[1.02]',
                    variant === 'secondary' &&
                    'glass-strong text-white hover:bg-zinc-800/80 focus:ring-zinc-500 hover:scale-[1.02]',
                    variant === 'ghost' &&
                    'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 shadow-none',
                    variant === 'outline' &&
                    'glass text-white border-zinc-600 hover:border-zinc-400 focus:ring-zinc-400 hover:scale-[1.02]',
                    // Sizes
                    size === 'sm' && 'px-4 py-2 text-sm rounded-xl',
                    size === 'md' && 'px-6 py-3 text-sm rounded-2xl',
                    size === 'lg' && 'px-8 py-4 text-base rounded-2xl',
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
