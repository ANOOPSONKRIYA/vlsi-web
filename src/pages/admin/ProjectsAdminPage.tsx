import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Button, Input, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

// Mock projects data
const mockProjects = [
    { id: '1', title: 'Neural Network Processor', category: 'vlsi', status: 'published', updated: '2024-01-15' },
    { id: '2', title: 'Autonomous Navigation Robot', category: 'ai-robotics', status: 'published', updated: '2024-01-14' },
    { id: '3', title: 'FPGA ML Accelerator', category: 'vlsi', status: 'draft', updated: '2024-01-13' },
    { id: '4', title: 'Intelligent Robotic Arm', category: 'ai-robotics', status: 'published', updated: '2024-01-12' },
    { id: '5', title: 'Power Management IC', category: 'vlsi', status: 'published', updated: '2024-01-11' },
    { id: '6', title: 'Drone Swarm Intelligence', category: 'ai-robotics', status: 'draft', updated: '2024-01-10' },
];

export function ProjectsAdminPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState<typeof mockProjects[0] | null>(null);

    const filteredProjects = mockProjects.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Projects</h1>
                    <p className="text-zinc-400 mt-1">Manage your portfolio projects</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingProject(null); }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Projects Table */}
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-zinc-800">
                                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Title</th>
                                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Category</th>
                                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Status</th>
                                    <th className="text-left p-4 text-sm font-medium text-zinc-400">Updated</th>
                                    <th className="text-right p-4 text-sm font-medium text-zinc-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProjects.map((project, index) => (
                                    <motion.tr
                                        key={project.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        className="border-b border-zinc-800/50 hover:bg-zinc-800/30"
                                    >
                                        <td className="p-4">
                                            <p className="font-medium text-white">{project.title}</p>
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={cn(
                                                    'px-2 py-1 text-xs font-medium rounded',
                                                    project.category === 'vlsi'
                                                        ? 'bg-blue-500/10 text-blue-400'
                                                        : 'bg-purple-500/10 text-purple-400'
                                                )}
                                            >
                                                {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={cn(
                                                    'px-2 py-1 text-xs font-medium rounded',
                                                    project.status === 'published'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : 'bg-yellow-500/10 text-yellow-400'
                                                )}
                                            >
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-zinc-400">{project.updated}</td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => { setEditingProject(project); setShowForm(true); }}
                                                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition-colors">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Add/Edit Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl border border-zinc-800"
                    >
                        <div className="p-6 border-b border-zinc-800">
                            <h2 className="text-xl font-semibold text-white">
                                {editingProject ? 'Edit Project' : 'Add New Project'}
                            </h2>
                        </div>
                        <div className="p-6 space-y-5">
                            <Input
                                label="Title"
                                placeholder="Project title"
                                defaultValue={editingProject?.title}
                            />
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Category</label>
                                <select
                                    defaultValue={editingProject?.category || 'vlsi'}
                                    className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                                >
                                    <option value="vlsi">VLSI</option>
                                    <option value="ai-robotics">AI & Robotics</option>
                                </select>
                            </div>
                            <Input
                                label="Description"
                                placeholder="Short description"
                            />
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Content</label>
                                <textarea
                                    placeholder="Full project content (Markdown supported)"
                                    rows={6}
                                    className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Status</label>
                                <select
                                    defaultValue={editingProject?.status || 'draft'}
                                    className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-6 border-t border-zinc-800 flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setShowForm(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setShowForm(false)}>
                                {editingProject ? 'Update Project' : 'Create Project'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
