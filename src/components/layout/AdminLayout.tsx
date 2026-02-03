import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FolderKanban,
    Users,
    Image,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
    { href: '/admin/team', label: 'Team', icon: Users },
    { href: '/admin/media', label: 'Media Library', icon: Image },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // In real app, clear auth state
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed top-0 left-0 z-50 h-full w-64 bg-zinc-900 border-r border-zinc-800 transition-transform duration-300 lg:translate-x-0',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-between h-16 px-4 border-b border-zinc-800">
                        <Link to="/admin" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                            <span>Admin</span>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 text-zinc-400 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {sidebarLinks.map((link) => {
                            const isActive =
                                link.href === '/admin'
                                    ? location.pathname === '/admin'
                                    : location.pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                                        isActive
                                            ? 'bg-white text-black'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    )}
                                >
                                    <link.icon className="h-5 w-5" />
                                    {link.label}
                                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-zinc-800">
                        <Link
                            to="/"
                            target="_blank"
                            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            View Site →
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:pl-64">
                {/* Header */}
                <header className="sticky top-0 z-30 h-16 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
                    <div className="flex items-center justify-between h-full px-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 text-zinc-400 hover:text-white"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <div className="flex-1" />
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-white">Admin User</p>
                                <p className="text-xs text-zinc-400">admin@university.edu</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
