import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Bot, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui';

// Mock featured projects for initial display
const featuredProjects = [
    {
        id: '1',
        slug: 'neural-processor',
        title: 'Neural Network Processor',
        category: 'vlsi',
        description: 'Custom ASIC design for accelerating neural network inference at the edge.',
        thumbnail_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    },
    {
        id: '2',
        slug: 'autonomous-robot',
        title: 'Autonomous Navigation Robot',
        category: 'ai-robotics',
        description: 'Self-navigating robot using computer vision and SLAM algorithms.',
        thumbnail_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
    },
    {
        id: '3',
        slug: 'fpga-accelerator',
        title: 'FPGA ML Accelerator',
        category: 'vlsi',
        description: 'High-performance FPGA-based machine learning inference engine.',
        thumbnail_url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600',
    },
];

const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Research Papers', value: '25+' },
    { label: 'Team Members', value: '15' },
    { label: 'Awards Won', value: '12' },
];

export function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 mb-8"
                    >
                        <span className="text-zinc-400">🔬</span>
                        <span className="text-sm text-zinc-300">Research & Innovation</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        Pioneering{' '}
                        <span className="text-gradient">VLSI Design</span>
                        <br />
                        & AI Innovation
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        Building the future of intelligent hardware through cutting-edge research
                        in semiconductor design and artificial intelligence.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/portfolio">
                            <Button size="lg">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" size="lg">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* VLSI Card */}
                        <Link
                            to="/portfolio?category=vlsi"
                            data-aos="fade-up"
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                            <Cpu className="h-12 w-12 text-blue-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">VLSI Design</h3>
                            <p className="text-zinc-400 mb-6">
                                Advanced semiconductor design, ASIC development, and FPGA implementations
                                for next-generation computing.
                            </p>
                            <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300">
                                Explore Projects <ChevronRight className="ml-1 h-4 w-4" />
                            </span>
                        </Link>

                        {/* AI & Robotics Card */}
                        <Link
                            to="/portfolio?category=ai-robotics"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                            <Bot className="h-12 w-12 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">AI & Robotics</h3>
                            <p className="text-zinc-400 mb-6">
                                Machine learning systems, autonomous robots, and intelligent automation
                                for real-world applications.
                            </p>
                            <span className="inline-flex items-center text-purple-400 group-hover:text-purple-300">
                                Explore Projects <ChevronRight className="ml-1 h-4 w-4" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12" data-aos="fade-up">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Featured Projects
                            </h2>
                            <p className="mt-2 text-zinc-400">
                                Showcasing our latest innovations and research
                            </p>
                        </div>
                        <Link to="/portfolio" className="hidden md:block">
                            <Button variant="ghost">
                                View All <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, index) => (
                            <Link
                                key={project.id}
                                to={`/portfolio/${project.slug}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
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
                                    <span className="inline-block px-2 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400 bg-zinc-800/50 rounded mb-3">
                                        {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                                    </span>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-zinc-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/portfolio">
                            <Button variant="outline">
                                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800"
                        data-aos="fade-up"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Collaborate?
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Join our team of researchers and innovators. We're always looking for
                        talented individuals passionate about technology.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/team">
                            <Button size="lg">
                                Meet Our Team
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" size="lg">
                                About the Lab
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
