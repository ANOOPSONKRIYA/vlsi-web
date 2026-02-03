import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Github, Mail, Download, ExternalLink } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui';

// Mock team member data
const mockTeamData = {
    'sarah-chen': {
        id: '1',
        slug: 'sarah-chen',
        name: 'Dr. Sarah Chen',
        role: 'Lab Director',
        bio: `Dr. Sarah Chen is the founding director of the VLSI Research Lab, bringing over 15 years of experience in semiconductor design and research. She received her Ph.D. in Electrical Engineering from MIT and has published extensively in top-tier conferences and journals.

Her research interests span low-power VLSI design, neuromorphic computing, and hardware accelerators for machine learning. Under her leadership, the lab has secured multiple grants and industry partnerships.

Prior to joining academia, Dr. Chen worked at Intel and NVIDIA, contributing to several commercial processor designs. She holds 12 patents in integrated circuit design.`,
        photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
        resume_url: '/resumes/sarah-chen.pdf',
        email: 'sarah@university.edu',
        linkedin_url: 'https://linkedin.com',
        github_url: 'https://github.com',
        skills: ['VLSI Design', 'ASIC Development', 'Low-Power Design', 'Neuromorphic Computing', 'Team Leadership'],
        projects: [
            {
                slug: 'neural-processor',
                title: 'Neural Network Processor',
                contribution: 'Project Lead - Directed the entire design and verification effort.',
                category: 'vlsi',
            },
            {
                slug: 'fpga-accelerator',
                title: 'FPGA ML Accelerator',
                contribution: 'Technical Advisor - Provided architectural guidance.',
                category: 'vlsi',
            },
        ],
        education: [
            { degree: 'Ph.D. Electrical Engineering', institution: 'MIT', year: '2008' },
            { degree: 'M.S. Computer Engineering', institution: 'Stanford University', year: '2004' },
            { degree: 'B.S. Electronics Engineering', institution: 'UC Berkeley', year: '2002' },
        ],
        publications: [
            { title: 'Ultra-Low Power Neural Accelerator for Edge Computing', venue: 'IEEE ISSCC 2023' },
            { title: 'Neuromorphic Computing: A Survey', venue: 'ACM Computing Surveys 2022' },
        ],
    },
};

export function TeamMemberPage() {
    const { slug } = useParams<{ slug: string }>();

    // Get member data (in real app, fetch from API)
    const member = mockTeamData[slug as keyof typeof mockTeamData] || mockTeamData['sarah-chen'];

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
                <div className="max-w-6xl mx-auto">
                    <Link to="/team" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Team
                    </Link>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Photo & Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:col-span-1"
                        >
                            <div className="sticky top-28">
                                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                                    <img
                                        src={member.photo_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="space-y-3">
                                    {member.resume_url && (
                                        <Button className="w-full" variant="primary">
                                            <Download className="h-4 w-4 mr-2" />
                                            Download Resume
                                        </Button>
                                    )}
                                    <a href={`mailto:${member.email}`} className="block">
                                        <Button className="w-full" variant="outline">
                                            <Mail className="h-4 w-4 mr-2" />
                                            Contact
                                        </Button>
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-3 mt-6 justify-center">
                                    <a
                                        href={member.linkedin_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5 text-white" />
                                    </a>
                                    <a
                                        href={member.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
                                    >
                                        <Github className="h-5 w-5 text-white" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
                                    >
                                        <Mail className="h-5 w-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="md:col-span-2"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-white">{member.name}</h1>
                            <p className="text-lg text-zinc-400 mt-2">{member.role}</p>

                            {/* Bio */}
                            <div className="mt-8" data-aos="fade-up">
                                <h2 className="text-xl font-semibold text-white mb-4">About</h2>
                                <div className="prose prose-invert prose-zinc max-w-none">
                                    {member.bio.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-zinc-400 mb-4">{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mt-10" data-aos="fade-up">
                                <h2 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 text-sm bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="mt-10" data-aos="fade-up">
                                <h2 className="text-xl font-semibold text-white mb-4">Education</h2>
                                <div className="space-y-4">
                                    {member.education.map((edu, index) => (
                                        <div key={index} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                            <p className="font-medium text-white">{edu.degree}</p>
                                            <p className="text-sm text-zinc-400">{edu.institution} • {edu.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="mt-10" data-aos="fade-up">
                                <h2 className="text-xl font-semibold text-white mb-4">Projects</h2>
                                <div className="space-y-4">
                                    {member.projects.map((project, index) => (
                                        <Link
                                            key={index}
                                            to={`/portfolio/${project.slug}`}
                                            className="block p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors group"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <span className={`text-xs font-medium uppercase tracking-wider ${project.category === 'vlsi' ? 'text-blue-400' : 'text-purple-400'
                                                        }`}>
                                                        {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                                                    </span>
                                                    <p className="font-medium text-white mt-1 group-hover:text-zinc-300 transition-colors">
                                                        {project.title}
                                                    </p>
                                                    <p className="text-sm text-zinc-400 mt-1">{project.contribution}</p>
                                                </div>
                                                <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Publications */}
                            {member.publications && member.publications.length > 0 && (
                                <div className="mt-10" data-aos="fade-up">
                                    <h2 className="text-xl font-semibold text-white mb-4">Publications</h2>
                                    <div className="space-y-3">
                                        {member.publications.map((pub, index) => (
                                            <div key={index} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                                <p className="font-medium text-white">{pub.title}</p>
                                                <p className="text-sm text-zinc-400 mt-1">{pub.venue}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
