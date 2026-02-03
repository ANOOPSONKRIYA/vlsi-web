import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Mock team data
const teamMembers = [
    {
        id: '1',
        slug: 'sarah-chen',
        name: 'Dr. Sarah Chen',
        role: 'Lab Director',
        bio: 'Leading researcher with 15+ years of experience in VLSI design and semiconductor technology.',
        photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'sarah@university.edu',
    },
    {
        id: '2',
        slug: 'michael-park',
        name: 'Michael Park',
        role: 'Senior RTL Designer',
        bio: 'Expert in Verilog/SystemVerilog with focus on high-performance processor design.',
        photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'michael@university.edu',
    },
    {
        id: '3',
        slug: 'emily-johnson',
        name: 'Emily Johnson',
        role: 'AI/ML Research Lead',
        bio: 'Specializing in deep learning optimization and edge AI deployment.',
        photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'emily@university.edu',
    },
    {
        id: '4',
        slug: 'david-kumar',
        name: 'David Kumar',
        role: 'Robotics Engineer',
        bio: 'Building autonomous systems with expertise in computer vision and motion planning.',
        photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'david@university.edu',
    },
    {
        id: '5',
        slug: 'anna-martinez',
        name: 'Anna Martinez',
        role: 'PhD Candidate',
        bio: 'Researching neuromorphic computing architectures for low-power AI applications.',
        photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'anna@university.edu',
    },
    {
        id: '6',
        slug: 'james-wilson',
        name: 'James Wilson',
        role: 'Graduate Researcher',
        bio: 'Working on FPGA-based accelerators for real-time signal processing.',
        photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        email: 'james@university.edu',
    },
];

export function TeamPage() {
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
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Our Team
                        </h1>
                        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                            Meet the brilliant minds driving innovation in VLSI and AI research
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-8 px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <Link
                                key={member.id}
                                to={`/team/${member.slug}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className="group relative overflow-hidden rounded-2xl glass-card hover:scale-[1.02] transition-all duration-500"
                            >
                                {/* Photo */}
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={member.photo_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>

                                {/* Info */}
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-zinc-300 font-medium mb-4">{member.role}</p>
                                    <p className="text-sm text-zinc-400 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <a
                                            href={member.linkedin_url}
                                            onClick={(e) => e.stopPropagation()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl glass-strong hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Linkedin className="h-4 w-4 text-white" />
                                        </a>
                                        <a
                                            href={member.github_url}
                                            onClick={(e) => e.stopPropagation()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl glass-strong hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Github className="h-4 w-4 text-white" />
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2.5 rounded-xl glass-strong hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Mail className="h-4 w-4 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
