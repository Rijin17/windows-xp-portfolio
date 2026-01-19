import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                            Portfolio
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Built with Next.js, Tailwind CSS & Framer Motion.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="https://github.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-blue-400">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-blue-400">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-blue-400">
                            <Twitter size={20} />
                        </Link>
                        <Link href="mailto:contact@example.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-blue-400">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {currentYear} Rijin Stalin. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
