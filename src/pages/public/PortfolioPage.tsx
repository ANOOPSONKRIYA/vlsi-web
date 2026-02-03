import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Input, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

// Mock projects data
const mockProjects = [
    {
        id: '1',
        slug: 'neural-processor',
        title: 'Neural Network Processor',
        category: 'vlsi',
        description: 'Custom ASIC design for accelerating neural network inference at the edge with ultra-low power consumption.',
        thumbnail_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
        status: 'published',
    },
    {
        id: '2',
        slug: 'autonomous-robot',
        title: 'Autonomous Navigation Robot',
        category: 'ai-robotics',
        description: 'Self-navigating robot using computer vision and SLAM algorithms for indoor navigation.',
        thumbnail_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
        status: 'published',
    },
    {
        id: '3',
        slug: 'fpga-accelerator',
        title: 'FPGA ML Accelerator',
        category: 'vlsi',
        description: 'High-performance FPGA-based machine learning inference engine for real-time processing.',
        thumbnail_url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600',
        status: 'published',
    },
    {
        id: '4',
        slug: 'robotic-arm',
        title: 'Intelligent Robotic Arm',
        category: 'ai-robotics',
        description: 'AI-powered robotic arm with precise motion control and object recognition capabilities.',
        thumbnail_url: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600',
        status: 'published',
    },
    {
        id: '5',
        slug: 'power-management-ic',
        title: 'Power Management IC',
        category: 'vlsi',
        description: 'Advanced power management integrated circuit for IoT devices with 95% efficiency.',
        thumbnail_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
        status: 'published',
    },
    {
        id: '6',
        slug: 'drone-swarm',
        title: 'Drone Swarm Intelligence',
        category: 'ai-robotics',
        description: 'Coordinated drone fleet system using swarm intelligence algorithms for search and rescue.',
        thumbnail_url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600',
        status: 'published',
    },
];

type Category = 'all' | 'vlsi' | 'ai-robotics';

export function PortfolioPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<Category>(
        (searchParams.get('category') as Category) || 'all'
    );

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const filteredProjects = mockProjects.filter((project) => {
        const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
        const matchesSearch =
            searchQuery === '' ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category);
        if (category === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Our Portfolio
                        </h1>
                        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                            Explore our innovative projects in VLSI design and AI/Robotics
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="px-4 pb-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            <Input
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-zinc-400" />
                            {(['all', 'vlsi', 'ai-robotics'] as Category[]).map((category) => (
                                <Button
                                    key={category}
                                    variant={activeCategory === category ? 'primary' : 'ghost'}
                                    size="sm"
                                    onClick={() => handleCategoryChange(category)}
                                    className={cn(
                                        activeCategory === category && 'text-black'
                                    )}
                                >
                                    {category === 'all'
                                        ? 'All'
                                        : category === 'vlsi'
                                            ? 'VLSI'
                                            : 'AI & Robotics'}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-zinc-400">No projects found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, index) => (
                                <Link
                                    key={project.id}
                                    to={`/portfolio/${project.slug}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                    className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.thumbnail_url}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <span
                                            className={cn(
                                                'inline-block px-2 py-1 text-xs font-medium uppercase tracking-wider rounded mb-3',
                                                project.category === 'vlsi'
                                                    ? 'text-blue-400 bg-blue-500/10'
                                                    : 'text-purple-400 bg-purple-500/10'
                                            )}
                                        >
                                            {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                        <span className="text-white font-medium">View Project →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
