import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Mail } from 'lucide-react';
import { Button, Input, Card, CardContent } from '@/components/ui';

// Mock team data
const mockTeam = [
    { id: '1', name: 'Dr. Sarah Chen', role: 'Lab Director', email: 'sarah@university.edu', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { id: '2', name: 'Michael Park', role: 'Senior RTL Designer', email: 'michael@university.edu', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { id: '3', name: 'Emily Johnson', role: 'AI/ML Research Lead', email: 'emily@university.edu', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { id: '4', name: 'David Kumar', role: 'Robotics Engineer', email: 'david@university.edu', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    { id: '5', name: 'Anna Martinez', role: 'PhD Candidate', email: 'anna@university.edu', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { id: '6', name: 'James Wilson', role: 'Graduate Researcher', email: 'james@university.edu', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
];

export function TeamAdminPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingMember, setEditingMember] = useState<typeof mockTeam[0] | null>(null);

    const filteredTeam = mockTeam.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Team Members</h1>
                    <p className="text-zinc-400 mt-1">Manage your team members</p>
                </div>
                <Button onClick={() => { setShowForm(true); setEditingMember(null); }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Member
                </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                    placeholder="Search team members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTeam.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <Card variant="interactive">
                            <CardContent className="p-5">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-14 h-14 rounded-xl object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-white truncate">{member.name}</h3>
                                        <p className="text-sm text-zinc-400">{member.role}</p>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-white mt-2 transition-colors"
                                        >
                                            <Mail className="h-3 w-3" />
                                            {member.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-zinc-800">
                                    <button
                                        onClick={() => { setEditingMember(member); setShowForm(true); }}
                                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </button>
                                    <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded-lg transition-colors">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

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
                                {editingMember ? 'Edit Team Member' : 'Add New Team Member'}
                            </h2>
                        </div>
                        <div className="p-6 space-y-5">
                            <Input
                                label="Full Name"
                                placeholder="Enter full name"
                                defaultValue={editingMember?.name}
                            />
                            <Input
                                label="Role"
                                placeholder="e.g., Senior RTL Designer"
                                defaultValue={editingMember?.role}
                            />
                            <Input
                                label="Email"
                                type="email"
                                placeholder="email@university.edu"
                                defaultValue={editingMember?.email}
                            />
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Bio</label>
                                <textarea
                                    placeholder="Brief biography"
                                    rows={4}
                                    className="w-full px-4 py-2.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                                />
                            </div>
                            <Input
                                label="Photo URL"
                                placeholder="https://..."
                                defaultValue={editingMember?.photo}
                            />
                            <Input
                                label="Resume URL"
                                placeholder="Link to resume/CV"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="LinkedIn URL"
                                    placeholder="https://linkedin.com/in/..."
                                />
                                <Input
                                    label="GitHub URL"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>
                        <div className="p-6 border-t border-zinc-800 flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setShowForm(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setShowForm(false)}>
                                {editingMember ? 'Update Member' : 'Add Member'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
