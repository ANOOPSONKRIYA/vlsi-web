import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'interactive' | 'bordered';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-2xl bg-zinc-900/50 backdrop-blur-sm',
                    variant === 'default' && 'border border-zinc-800',
                    variant === 'interactive' &&
                    'border border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/70 cursor-pointer',
                    variant === 'bordered' && 'border-2 border-zinc-700',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardTitle = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn('text-lg font-semibold text-white', className)}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-zinc-400', className)}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';
