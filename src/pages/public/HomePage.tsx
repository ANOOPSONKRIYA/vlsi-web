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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-8 shadow-lg"
                    >
                        <span className="text-yellow-400 text-lg">⭐</span>
                        <span className="text-sm font-medium text-white tracking-wide uppercase">
                            Award-Winning Research
                        </span>
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
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* VLSI Card */}
                        <Link
                            to="/portfolio?category=vlsi"
                            data-aos="fade-up"
                            className="group relative overflow-hidden rounded-3xl glass-card p-10 hover:scale-[1.02] transition-all duration-500 hover-glow-blue"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
                            <div className="relative z-10">
                                <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 group-hover:bg-blue-500/20 transition-all duration-300">
                                    <Cpu className="h-10 w-10 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                    VLSI Design
                                </h3>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    Advanced semiconductor design, ASIC development, and FPGA implementations
                                    for next-generation computing.
                                </p>
                                <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 group-hover:gap-2 gap-1 transition-all">
                                    Explore Projects <ChevronRight className="h-5 w-5" />
                                </span>
                            </div>
                        </Link>

                        {/* AI & Robotics Card */}
                        <Link
                            to="/portfolio?category=ai-robotics"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="group relative overflow-hidden rounded-3xl glass-card p-10 hover:scale-[1.02] transition-all duration-500 hover-glow-purple"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                            <div className="relative z-10">
                                <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                                    <Bot className="h-10 w-10 text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors">
                                    AI & Robotics
                                </h3>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    Machine learning systems, autonomous robots, and intelligent automation
                                    for real-world applications.
                                </p>
                                <span className="inline-flex items-center text-purple-400 font-medium group-hover:text-purple-300 group-hover:gap-2 gap-1 transition-all">
                                    Explore Projects <ChevronRight className="h-5 w-5" />
                                </span>
                            </div>
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
                                className="group relative overflow-hidden rounded-2xl glass-card hover:scale-[1.02] transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden bg-zinc-900">
                                    <img
                                        src={project.thumbnail_url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-800/70 rounded-full mb-4 backdrop-blur-sm">
                                        {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
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
                        className="relative overflow-hidden rounded-3xl glass-card p-12"
                        data-aos="fade-up"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                        
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-zinc-400 font-medium tracking-wide">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
