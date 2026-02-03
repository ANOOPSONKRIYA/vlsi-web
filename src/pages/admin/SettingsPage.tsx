import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Globe, Mail, Loader2 } from 'lucide-react';
import { Button, Input, Textarea, Card, CardContent } from '@/components/ui';

export function SettingsPage() {
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate save
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSaving(false);
    };

    return (
        <div className="space-y-6 max-w-3xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Settings</h1>
                    <p className="text-zinc-400 mt-1">Manage your site settings</p>
                </div>
                <Button onClick={handleSave} disabled={isSaving}>
                    {isSaving ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                        </>
                    )}
                </Button>
            </div>

            {/* General Settings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-zinc-400" />
                            General
                        </h2>
                        <div className="space-y-5">
                            <Input
                                label="Site Title"
                                placeholder="VLSI Research Lab"
                                defaultValue="VLSI Research Lab"
                            />
                            <Textarea
                                label="Site Description"
                                placeholder="Brief description of the lab"
                                defaultValue="A world-class research facility dedicated to advancing the frontiers of VLSI design, artificial intelligence, and robotics."
                            />
                            <Input
                                label="Footer Copyright"
                                placeholder="© 2024 VLSI Lab. All rights reserved."
                                defaultValue="© 2024 VLSI Lab. All rights reserved."
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Contact Settings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                            <Mail className="h-5 w-5 text-zinc-400" />
                            Contact Information
                        </h2>
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input
                                    label="Email Address"
                                    type="email"
                                    placeholder="lab@university.edu"
                                    defaultValue="lab@university.edu"
                                />
                                <Input
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    defaultValue="+1 (555) 123-4567"
                                />
                            </div>
                            <Input
                                label="Address"
                                placeholder="University Campus, Tech Park"
                                defaultValue="University Campus, Tech Park"
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-white mb-5">Social Links</h2>
                        <div className="space-y-5">
                            <Input
                                label="GitHub URL"
                                placeholder="https://github.com/vlsi-lab"
                                defaultValue="https://github.com/vlsi-lab"
                            />
                            <Input
                                label="LinkedIn URL"
                                placeholder="https://linkedin.com/company/vlsi-lab"
                                defaultValue="https://linkedin.com/company/vlsi-lab"
                            />
                            <Input
                                label="Twitter/X URL"
                                placeholder="https://twitter.com/vlsi_lab"
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Danger Zone */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <Card className="border-red-500/20">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-red-400 mb-3">Danger Zone</h2>
                        <p className="text-sm text-zinc-400 mb-4">
                            These actions are irreversible. Please proceed with caution.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="outline" className="text-red-400 border-red-400/50 hover:border-red-400">
                                Clear All Cache
                            </Button>
                            <Button variant="outline" className="text-red-400 border-red-400/50 hover:border-red-400">
                                Reset Settings
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
