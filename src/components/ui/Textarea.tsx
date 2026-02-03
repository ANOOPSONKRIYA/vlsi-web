import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
                <textarea
                    ref={ref}
                    id={id}
                    className={cn(
                        'w-full px-4 py-2.5 bg-zinc-900/50 border rounded-xl text-white placeholder-zinc-500',
                        'focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500',
                        'transition-all duration-200 resize-none min-h-[120px]',
                        error ? 'border-red-500' : 'border-zinc-700',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
