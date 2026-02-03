import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui';
import { formatDate } from '@/lib/utils';

// Mock project data
const mockProjectData = {
    'neural-processor': {
        id: '1',
        slug: 'neural-processor',
        title: 'Neural Network Processor',
        category: 'vlsi',
        description: 'Custom ASIC design for accelerating neural network inference at the edge with ultra-low power consumption.',
        content: `
## Overview

This project focuses on designing a custom Application-Specific Integrated Circuit (ASIC) optimized for neural network inference. The processor is specifically architected for edge computing scenarios where power efficiency is paramount.

## Key Features

- **Ultra-low power consumption**: Operating at just 5mW during inference
- **High throughput**: Capable of processing 1000+ inferences per second
- **Compact design**: Only 2mm² die area
- **Flexible architecture**: Supports various neural network topologies

## Technical Specifications

| Specification | Value |
|--------------|-------|
| Process Node | 28nm CMOS |
| Operating Voltage | 0.8V - 1.1V |
| Clock Frequency | 500 MHz |
| On-chip Memory | 512KB SRAM |
| Interface | SPI, I2C |

## Applications

This processor is ideal for IoT devices, wearables, and embedded systems that require on-device AI capabilities without cloud connectivity.
    `,
        thumbnail_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
        timeline: [
            { date: '2023-01-15', title: 'Project Kickoff', description: 'Initial architecture planning and team formation.' },
            { date: '2023-03-01', title: 'RTL Design Complete', description: 'Completed Verilog implementation of the core processor.' },
            { date: '2023-05-15', title: 'Synthesis & Timing Closure', description: 'Achieved timing closure at 500MHz.' },
            { date: '2023-07-01', title: 'Tape-out', description: 'Submitted final design for fabrication.' },
            { date: '2023-10-01', title: 'Silicon Validation', description: 'Received first silicon samples and began testing.' },
            { date: '2023-12-01', title: 'Project Complete', description: 'Full validation complete, ready for production.' },
        ],
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200', caption: 'Chip Die Photo' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200', caption: 'Development Board' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200', caption: 'Lab Testing' },
            { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Demo Video' },
        ],
        team_members: [
            { name: 'Dr. Sarah Chen', role: 'Project Lead', photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
            { name: 'Michael Park', role: 'RTL Designer', photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
            { name: 'Emily Johnson', role: 'Verification Engineer', photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
        ],
    },
};

export function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // Get project data (in real app, fetch from API)
    const project = mockProjectData[slug as keyof typeof mockProjectData] || mockProjectData['neural-processor'];

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const openLightbox = (index: number) => {
        setCurrentMediaIndex(index);
        setLightboxOpen(true);
    };

    const nextMedia = () => {
        setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
    };

    const prevMedia = () => {
        setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 text-sm font-medium uppercase tracking-wider text-blue-400 bg-blue-500/10 rounded-full mb-4">
                            {project.category === 'vlsi' ? 'VLSI' : 'AI & Robotics'}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            {project.title}
                        </h1>
                        <p className="mt-4 text-lg text-zinc-400 max-w-3xl">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 aspect-video rounded-2xl overflow-hidden"
                    >
                        <img
                            src={project.thumbnail_url}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        data-aos="fade-up"
                        className="prose prose-invert prose-zinc max-w-none"
                        dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br/>') }}
                    />
                </div>
            </section>

            {/* Media Gallery Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">
                        Photos & Videos
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.media.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(index)}
                            >
                                {item.type === 'video' ? (
                                    <>
                                        <img
                                            src={`https://img.youtube.com/vi/${item.url.split('/').pop()}/0.jpg`}
                                            alt={item.caption}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                                            <Play className="h-10 w-10 text-white" fill="white" />
                                        </div>
                                    </>
                                ) : (
                                    <img
                                        src={item.url}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-xs text-white truncate">{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">
                        Project Timeline
                    </h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-zinc-800" />

                        {project.timeline.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className={`relative flex items-start mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                <div className="hidden md:block flex-1" />
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white border-4 border-zinc-900 z-10 mt-1.5" />
                                <div className={`flex-1 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
                                            <Calendar className="h-3 w-3" />
                                            {formatDate(item.date)}
                                        </div>
                                        <h3 className="font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">
                        <Users className="inline-block h-6 w-6 mr-2" />
                        Team Members
                    </h2>
                    <div className="flex flex-wrap gap-6" data-aos="fade-up">
                        {project.team_members.map((member, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <img
                                    src={member.photo_url}
                                    alt={member.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-white">{member.name}</p>
                                    <p className="text-sm text-zinc-400">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <button
                        onClick={prevMedia}
                        className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        onClick={nextMedia}
                        className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                    <div className="max-w-4xl w-full px-4">
                        {project.media[currentMediaIndex].type === 'video' ? (
                            <iframe
                                src={project.media[currentMediaIndex].url}
                                className="w-full aspect-video rounded-xl"
                                allowFullScreen
                            />
                        ) : (
                            <img
                                src={project.media[currentMediaIndex].url}
                                alt={project.media[currentMediaIndex].caption}
                                className="w-full max-h-[80vh] object-contain rounded-xl"
                            />
                        )}
                        <p className="text-center text-white mt-4">{project.media[currentMediaIndex].caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
