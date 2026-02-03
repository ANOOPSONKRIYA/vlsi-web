import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                {label && (
                    <label
                        htmlFor={id}
                        className="block text-sm font-medium text-zinc-300"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={id}
                    className={cn(
                        'w-full px-4 py-3 glass-strong rounded-2xl text-white placeholder-zinc-500',
                        'focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20',
                        'transition-all duration-300 hover:bg-zinc-800/60',
                        error ? 'border-red-500 focus:ring-red-500/30' : '',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
