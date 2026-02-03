import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb, Mail, MapPin, Phone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timeline = [
    { year: '2018', title: 'Lab Founded', description: 'Established as a dedicated research facility.' },
    { year: '2019', title: 'First VLSI Chip', description: 'Designed and fabricated our first custom ASIC.' },
    { year: '2020', title: 'AI Division', description: 'Expanded into artificial intelligence and robotics.' },
    { year: '2021', title: 'Industry Partnership', description: 'Collaborated with leading semiconductor companies.' },
    { year: '2022', title: 'International Recognition', description: 'Research published in top-tier journals.' },
    { year: '2023', title: 'Innovation Award', description: 'Received national recognition for breakthrough research.' },
];

const values = [
    {
        icon: Target,
        title: 'Excellence',
        description: 'We strive for excellence in every project, pushing the boundaries of what\'s possible.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Constant innovation drives our research, leading to breakthrough discoveries.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We believe in the power of teamwork and cross-disciplinary collaboration.',
    },
    {
        icon: Award,
        title: 'Impact',
        description: 'Our work creates real-world impact, solving problems that matter.',
    },
];

export function AboutPage() {
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
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            About Our Lab
                        </h1>
                        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                            A world-class research facility dedicated to advancing the frontiers of
                            VLSI design, artificial intelligence, and robotics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-zinc-400 mb-4">
                                We are committed to pioneering research that bridges the gap between
                                theoretical innovation and practical application. Our lab serves as a
                                hub for talented researchers and students to explore the cutting edge
                                of technology.
                            </p>
                            <p className="text-zinc-400">
                                Through our work in VLSI design and AI/Robotics, we aim to create
                                solutions that address real-world challenges and push the boundaries
                                of what's technologically possible.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600"
                                alt="Research lab"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-white">Our Values</h2>
                        <p className="mt-3 text-zinc-400">The principles that guide our research</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
                            >
                                <value.icon className="h-10 w-10 text-white mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-zinc-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-white">Our Journey</h2>
                        <p className="mt-3 text-zinc-400">Milestones that define our growth</p>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-zinc-800" />

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                <div className="flex-1 md:w-1/2" />
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-zinc-900 z-10" />
                                <div className={`flex-1 md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <span className="text-sm font-medium text-zinc-500">{item.year}</span>
                                        <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                                        <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        data-aos="fade-up"
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Get in Touch
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-400">Address</p>
                                    <p className="text-white">University Campus, Tech Park</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-400">Email</p>
                                    <p className="text-white">lab@university.edu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-400">Phone</p>
                                    <p className="text-white">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
