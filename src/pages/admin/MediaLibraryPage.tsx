import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Trash2, Image as ImageIcon, Film, Copy, Check } from 'lucide-react';
import { Button, Input, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

// Mock media data
const mockMedia = [
    { id: '1', type: 'image', name: 'chip-die-photo.jpg', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300', size: '2.4 MB', uploaded: '2024-01-15' },
    { id: '2', type: 'image', name: 'robot-arm.jpg', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300', size: '1.8 MB', uploaded: '2024-01-14' },
    { id: '3', type: 'image', name: 'fpga-board.jpg', url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=300', size: '3.1 MB', uploaded: '2024-01-13' },
    { id: '4', type: 'video', name: 'demo-video.mp4', url: '#', size: '45.2 MB', uploaded: '2024-01-12' },
    { id: '5', type: 'image', name: 'lab-photo.jpg', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300', size: '2.9 MB', uploaded: '2024-01-11' },
    { id: '6', type: 'image', name: 'team-photo.jpg', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300', size: '4.2 MB', uploaded: '2024-01-10' },
];

export function MediaLibraryPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
    const [selectedMedia, setSelectedMedia] = useState<string[]>([]);
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

    const filteredMedia = mockMedia.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' || item.type === filter;
        return matchesSearch && matchesFilter;
    });

    const toggleSelect = (id: string) => {
        setSelectedMedia((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const copyUrl = async (url: string) => {
        await navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Media Library</h1>
                    <p className="text-zinc-400 mt-1">Manage your images and videos</p>
                </div>
                <div className="flex gap-3">
                    {selectedMedia.length > 0 && (
                        <Button variant="outline" className="text-red-400 border-red-400/50 hover:border-red-400">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete ({selectedMedia.length})
                        </Button>
                    )}
                    <Button>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <Input
                        placeholder="Search media..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2">
                    {(['all', 'image', 'video'] as const).map((f) => (
                        <Button
                            key={f}
                            variant={filter === f ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setFilter(f)}
                            className={cn(filter === f && 'text-black')}
                        >
                            {f === 'all' ? 'All' : f === 'image' ? 'Images' : 'Videos'}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredMedia.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                    >
                        <Card
                            variant="interactive"
                            className={cn(
                                'relative overflow-hidden',
                                selectedMedia.includes(item.id) && 'ring-2 ring-white'
                            )}
                            onClick={() => toggleSelect(item.id)}
                        >
                            <div className="aspect-square relative">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                        <Film className="h-12 w-12 text-zinc-600" />
                                    </div>
                                )}
                                {/* Selection indicator */}
                                <div
                                    className={cn(
                                        'absolute top-2 left-2 w-5 h-5 rounded-full border-2 transition-colors',
                                        selectedMedia.includes(item.id)
                                            ? 'bg-white border-white'
                                            : 'border-white/50 bg-black/30'
                                    )}
                                >
                                    {selectedMedia.includes(item.id) && (
                                        <Check className="h-full w-full p-0.5 text-black" />
                                    )}
                                </div>
                                {/* Type badge */}
                                <div className="absolute top-2 right-2">
                                    {item.type === 'image' ? (
                                        <ImageIcon className="h-4 w-4 text-white drop-shadow" />
                                    ) : (
                                        <Film className="h-4 w-4 text-white drop-shadow" />
                                    )}
                                </div>
                            </div>
                            <CardContent className="p-3">
                                <p className="text-sm text-white truncate">{item.name}</p>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-xs text-zinc-500">{item.size}</p>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); copyUrl(item.url); }}
                                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                                        title="Copy URL"
                                    >
                                        {copiedUrl === item.url ? (
                                            <Check className="h-3 w-3 text-green-400" />
                                        ) : (
                                            <Copy className="h-3 w-3" />
                                        )}
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {filteredMedia.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-zinc-400">No media files found.</p>
                </div>
            )}
        </div>
    );
}
