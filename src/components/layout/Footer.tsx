import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                                <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                            <span>VLSI Lab</span>
                        </Link>
                        <p className="mt-4 max-w-md text-sm text-zinc-400">
                            Pioneering research in VLSI design and AI/Robotics. Building the future of
                            intelligent hardware and systems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/portfolio" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                    Our Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                    Team Members
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="mailto:lab@university.edu"
                                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                    lab@university.edu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-white/10 pt-8">
                    <p className="text-center text-sm text-zinc-500">
                        © {new Date().getFullYear()} VLSI Lab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
