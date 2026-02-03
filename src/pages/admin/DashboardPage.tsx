import { motion } from 'framer-motion';
import { FolderKanban, Users, Image, TrendingUp, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui';

const stats = [
    { label: 'Total Projects', value: '24', icon: FolderKanban, change: '+3 this month', color: 'text-blue-400' },
    { label: 'Team Members', value: '12', icon: Users, change: '+2 this month', color: 'text-green-400' },
    { label: 'Media Files', value: '156', icon: Image, change: '+28 this month', color: 'text-purple-400' },
    { label: 'Page Views', value: '4.2K', icon: Eye, change: '+18% vs last month', color: 'text-orange-400' },
];

const recentActivity = [
    { action: 'Project updated', item: 'Neural Network Processor', time: '2 hours ago' },
    { action: 'Team member added', item: 'Anna Martinez', time: '5 hours ago' },
    { action: 'Media uploaded', item: '12 new images', time: '1 day ago' },
    { action: 'Project created', item: 'Drone Swarm Intelligence', time: '2 days ago' },
    { action: 'Settings updated', item: 'Contact information', time: '3 days ago' },
];

const quickActions = [
    { label: 'Add Project', href: '/admin/projects', icon: FolderKanban },
    { label: 'Add Team Member', href: '/admin/team', icon: Users },
    { label: 'Upload Media', href: '/admin/media', icon: Image },
];

export function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-zinc-400 mt-1">Welcome back! Here's what's happening.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardContent className="p-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-zinc-400">{stat.label}</p>
                                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                                        <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                                            <TrendingUp className="h-3 w-3 text-green-400" />
                                            {stat.change}
                                        </p>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-zinc-800 ${stat.color}`}>
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="lg:col-span-2"
                >
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-zinc-400" />
                                Recent Activity
                            </h2>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0"
                                    >
                                        <div>
                                            <p className="text-white">{activity.action}</p>
                                            <p className="text-sm text-zinc-400">{activity.item}</p>
                                        </div>
                                        <p className="text-xs text-zinc-500">{activity.time}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                {quickActions.map((action, index) => (
                                    <Link
                                        key={index}
                                        to={action.href}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-zinc-700">
                                            <action.icon className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-white">{action.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
