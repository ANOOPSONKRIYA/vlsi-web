import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { RadiantBackground } from '@/components/layout';

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate login - in real app, use Supabase Auth
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Demo credentials check
        if (email === 'admin@university.edu' && password === 'admin123') {
            navigate('/admin');
        } else {
            setError('Invalid email or password');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <RadiantBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="p-8 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
                            <svg
                                className="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Login</h1>
                        <p className="text-zinc-400 mt-2">Sign in to access the dashboard</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <Input
                            label="Email"
                            type="email"
                            placeholder="admin@university.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[38px] text-zinc-400 hover:text-white"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>

                    {/* Demo credentials hint */}
                    <div className="mt-6 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                        <p className="text-xs text-zinc-400 text-center">
                            <strong>Demo:</strong> admin@university.edu / admin123
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
